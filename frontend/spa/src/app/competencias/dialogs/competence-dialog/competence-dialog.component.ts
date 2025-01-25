import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CompetenceService } from '../../../services/competencies/competence.service';
import { FormatCatalogService } from '../../../services/competencies/format-catalog.service';
import { RuleDisciplineService } from '../../../services/competencies/rule-discipline.service';
import { RuleCompetenceService } from '../../../services/competencies/rule-competence.service';
import { FormatCatalog } from '../../../models/competencies/format-catalog.model';
import { RuleDiscipline } from '../../../models/competencies/rule-discipline.model';
import { RuleCompetition } from '../../../models/competencies/rule-competence.model';

@Component({
  selector: 'app-competence-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './competence-dialog.component.html',
  styleUrls: ['./competence-dialog.component.scss']
})
export class CompetenceDialogComponent implements OnInit {
  form: FormGroup;
  formats: FormatCatalog[] = [];
  ruleDisciplines: RuleDiscipline[] = [];
  rules: RuleCompetition[] = [];
  mode: 'create' | 'edit' | 'delete';
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CompetenceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private competenceService: CompetenceService,
    private formatCatalogService: FormatCatalogService,
    private ruleDisciplineService: RuleDisciplineService,
    private ruleCompetenceService: RuleCompetenceService
  ) {
    this.mode = data.mode;
    this.form = this.fb.group({
      name: [''],
      description: [''],
      logo: [null],
      competence_format: [null],
      rule_discipline_list: this.fb.array([]),
      rule_list: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.loadRelatedData();

    if (this.mode === 'edit' && this.data.item) {
      this.form.patchValue(this.data.item);
      this.setRules(this.data.item.rule_discipline_list, 'rule_discipline_list');
      this.setRules(this.data.item.rule_list, 'rule_list');
    }
  }

  loadRelatedData(): void {
    this.formatCatalogService.getFormatCatalogs().subscribe(data => this.formats = data);
    this.ruleDisciplineService.getRuleDisciplines().subscribe(data => this.ruleDisciplines = data);
    this.ruleCompetenceService.getRuleCompetences().subscribe(data => this.rules = data);
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  addRuleDiscipline(): void {
    const control = this.form.get('rule_discipline_list') as FormArray;
    control.push(this.fb.group({
      rule_description: ['']
    }));
  }

  removeRuleDiscipline(index: number): void {
    const control = this.form.get('rule_discipline_list') as FormArray;
    control.removeAt(index);
  }

  addRule(): void {
    const control = this.form.get('rule_list') as FormArray;
    control.push(this.fb.group({
      rule_description: ['']
    }));
  }

  removeRule(index: number): void {
    const control = this.form.get('rule_list') as FormArray;
    control.removeAt(index);
  }

  setRules(rules: any[], controlName: string): void {
    const control = this.form.get(controlName) as FormArray;
    rules.forEach(rule => {
      control.push(this.fb.group({
        rule_description: [rule.rule_description]
      }));
    });
  }

  get ruleDisciplineList(): FormArray {
    return this.form.get('rule_discipline_list') as FormArray;
  }

  get ruleList(): FormArray {
    return this.form.get('rule_list') as FormArray;
  }

  save(): void {
    const formData = new FormData();
    formData.append('name', this.form.get('name')?.value);
    formData.append('description', this.form.get('description')?.value);
    if (this.selectedFile) {
      formData.append('logo', this.selectedFile);
    }
    formData.append('competence_format', this.form.get('competence_format')?.value.id); // Ensure pk value is sent
    formData.append('rule_discipline_list', JSON.stringify(this.form.get('rule_discipline_list')?.value));
    formData.append('rule_list', JSON.stringify(this.form.get('rule_list')?.value));

    if (this.mode === 'create') {
      this.competenceService.createCompetence(formData).subscribe(() => this.dialogRef.close(true));
    } else if (this.mode === 'edit') {
      this.competenceService.updateCompetence(this.data.item.id, formData).subscribe(() => this.dialogRef.close(true));
    } else if (this.mode === 'delete') {
      this.dialogRef.close(true);
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
