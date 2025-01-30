import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CompetenceService } from '../../services/competencies/competence.service';
import { FormatService } from '../../services/competencies/format.service';
import { RuleDisciplineService } from '../../services/competencies/rule-discipline.service';
import { RuleCompetenceService } from '../../services/competencies/rule-competence.service';
import { Format } from '../../models/competencies/format.model';
import { RuleDiscipline } from '../../models/competencies/rule-discipline.model';
import { RuleCompetition } from '../../models/competencies/rule-competence.model';
import { SharedModule } from '../../shared/shared.module';
import { Competence } from '../../models/competencies/competence.model';

@Component({
  selector: 'app-competence-dialog-form',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './competence-dialog-form.component.html',
  styleUrls: ['./competence-dialog-form.component.scss']
})
export class CompetenceDialogFormComponent implements OnInit {
  form: FormGroup;
  formats: Format[] = [];
  ruleDisciplines: RuleDiscipline[] = [];
  ruleCompetitions: RuleCompetition[] = [];
  fileName: string | null = null;
  fileIcon: string = 'insert_drive_file';

  constructor(
    private fb: FormBuilder,
    private competenceService: CompetenceService,
    public dialogRef: MatDialogRef<CompetenceDialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { action: string, competence: Competence },
    private formatService: FormatService,
    private ruleDisciplineService: RuleDisciplineService,
    private ruleCompetenceService: RuleCompetenceService
  ) {
    this.form = this.fb.group({
      name: [data.competence?.name || ''],
      description: [data.competence?.description || ''],
      logo: [data.competence?.logo || '']
    });
  }

  ngOnInit(): void {
    this.formatService.getFormats().subscribe(formats => this.formats = formats);
    this.ruleDisciplineService.getRuleDisciplines().subscribe(ruleDisciplines => this.ruleDisciplines = ruleDisciplines);
    this.ruleCompetenceService.getRuleCompetences().subscribe(ruleCompetitions => this.ruleCompetitions = ruleCompetitions);
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({ logo: file });
      this.fileName = file.name;
      this.fileIcon = this.getFileIcon(file.type);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onFileDrop(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer?.files.length) {
      const file = event.dataTransfer.files[0];
      this.form.patchValue({ logo: file });
      this.fileName = file.name;
      this.fileIcon = this.getFileIcon(file.type);
    }
  }

  getFileIcon(fileType: string): string {
    if (fileType.startsWith('image/')) {
      return 'image';
    } else if (fileType.startsWith('video/')) {
      return 'videocam';
    } else if (fileType.startsWith('audio/')) {
      return 'audiotrack';
    } else {
      return 'insert_drive_file';
    }
  }

  removeFile(): void {
    this.form.patchValue({ logo: null });
    this.fileName = null;
    this.fileIcon = 'insert_drive_file';
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('name', this.form.get('name')?.value);
    formData.append('description', this.form.get('description')?.value);

    const logoFile = this.form.get('logo')?.value;
    if (logoFile instanceof File) {
      formData.append('logo', logoFile);
    }

    if (this.data.action === 'create') {
      this.competenceService.createCompetence(formData).subscribe(() => {
        this.dialogRef.close(true);
      });
    } else if (this.data.action === 'edit') {
      this.competenceService.updateCompetence(this.data.competence.id, formData).subscribe(() => {
        this.dialogRef.close(true);
      });
    } else if (this.data.action === 'delete') {
      this.competenceService.deleteCompetence(this.data.competence.id).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}