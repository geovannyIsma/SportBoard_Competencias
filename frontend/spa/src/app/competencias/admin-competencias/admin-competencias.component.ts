import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompetenceService } from '../../services/competencies/competence.service';
import { Competence } from '../../models/competencies/competence.model';
import { CompetenceDialogFormComponent } from '../competence-dialog-form/competence-dialog-form.component';
import { SharedModule } from '../../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-admin-competencias',
  standalone: true,
  imports: [SharedModule, MatDialogModule, MatIconModule, MatButtonModule],
  templateUrl: './admin-competencias.component.html',
  styleUrls: ['./admin-competencias.component.scss']
})
export class AdminCompetenciasComponent implements OnInit {
  competences: Competence[] = [];
  displayedColumns: string[] = ['name', 'description', 'logo', 'competence_format', 'rule_discipline_list', 'rule_list'];
  selectedCompetence: Competence | null = null;
  form: FormGroup;
  fileName: string | null = null;
  fileIcon: string = 'insert_drive_file';

  constructor(private competenceService: CompetenceService, private dialog: MatDialog, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      description: [''],
      logo: [null],
      // Otros campos del formulario
    });
  }

  ngOnInit(): void {
    this.loadCompetences();
  }

  loadCompetences(): void {
    this.competenceService.getCompetences().subscribe(data => {
      this.competences = data;
    });
  }

  openDialog(action: string, competence?: Competence): void {
    const dialogRef = this.dialog.open(CompetenceDialogFormComponent, {
      width: '600px',
      height: '600px',
      data: { action, competence },
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadCompetences();
      }
    });
  }

  refresh(): void {
    this.loadCompetences();
  }

  create(): void {
    this.openDialog('create');
  }

  edit(competence: Competence): void {
    this.openDialog('edit', competence);
  }

  delete(competence: Competence): void {
    this.openDialog('delete', competence);
  }

  onSelect(competence: Competence): void {
    this.selectedCompetence = competence;
    this.form.patchValue({
      name: competence.name,
      description: competence.description,
      logo: competence.logo,
      // Otros campos
    });
  }

  onSubmit(): void {
    if (this.selectedCompetence) {
      // Lógica para actualizar la competencia
    } else {
      // Lógica para crear una nueva competencia
    }
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

  removeFile(event: MouseEvent): void {
    event.stopPropagation();
    this.form.patchValue({ logo: null });
    this.fileName = null;
    this.fileIcon = 'insert_drive_file';
  }

  onCancel(): void {
    this.form.reset();
    this.selectedCompetence = null;
  }
}
