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
  displayedColumns: string[] = ['logo', 'name', 'description']; // Modificado para mostrar solo estas columnas
  selectedCompetence: Competence | null = null;
  form: FormGroup;
  fileName: string | null = null;
  fileIcon: string = 'insert_drive_file';
  isEditMode: boolean = false;
  isDeleteMode: boolean = false;
  filePreview: string | null = null;

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
    this.selectedCompetence = null;
    this.form.reset();
    this.fileName = null;
    this.fileIcon = 'insert_drive_file';
    this.filePreview = null;
    this.isEditMode = false;
    this.isDeleteMode = false;
  }

  edit(competence: Competence): void {
    this.openDialog('edit', competence);
  }

  delete(): void {
    this.isDeleteMode = true;
    this.isEditMode = false;
  }

  confirmDelete(): void {
    if (this.selectedCompetence) {
      this.competenceService.deleteCompetence(this.selectedCompetence.id).subscribe(() => {
        this.loadCompetences();
        this.onCancel();
      });
    }
  }

  onSelect(competence: Competence): void {
    this.selectedCompetence = competence;
    this.form.patchValue({
      name: competence.name,
      description: competence.description,
      logo: competence.logo,
      // Otros campos
    });
    this.fileName = competence.logo;
    this.filePreview = competence.logo;
    this.isEditMode = false;
    this.isDeleteMode = false;
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('name', this.form.get('name')?.value);
    formData.append('description', this.form.get('description')?.value);

    const logoFile = this.form.get('logo')?.value;
    if (logoFile instanceof File) {
      formData.append('logo', logoFile);
    }

    if (this.selectedCompetence) {
      // Lógica para actualizar la competencia
      this.competenceService.updateCompetence(this.selectedCompetence.id, formData).subscribe(() => {
        this.loadCompetences();
        this.onCancel();
      });
    } else {
      // Lógica para crear una nueva competencia
      this.competenceService.createCompetence(formData).subscribe(() => {
        this.loadCompetences();
        this.onCancel();
      });
    }
  }

  private formatFileName(name: string): string {
    if (name.length > 25) {
      const extension = name.split('.').pop();
      return name.substring(0, 20) + '...' + (extension ? '.' + extension : '');
    }
    return name;
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({ logo: file });
      this.fileName = this.formatFileName(file.name);
      this.fileIcon = this.getFileIcon(file.type);
      this.filePreview = URL.createObjectURL(file);
      this.isEditMode = false; // Desactivar modo edición después de subir nueva imagen
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
      this.fileName = this.formatFileName(file.name);
      this.fileIcon = this.getFileIcon(file.type);
      this.filePreview = URL.createObjectURL(file);
      this.isEditMode = false; // Desactivar modo edición después de subir nueva imagen
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
    this.filePreview = null;
  }

  enableEditMode(): void {
    this.isEditMode = true;
    // No limpiar el filePreview ni fileName aquí
  }

  onCancel(): void {
    this.form.reset();
    this.selectedCompetence = null;
    this.fileName = null;
    this.fileIcon = 'insert_drive_file';
    this.filePreview = null;
    this.isEditMode = false;
    this.isDeleteMode = false;
  }
}
