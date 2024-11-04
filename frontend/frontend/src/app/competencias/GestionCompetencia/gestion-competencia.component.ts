import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-gestion-competencia',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './gestion-competencia.component.html',
  styleUrls: ['./gestion-competencia.component.scss']
})
export class GestionCompetenciaComponent {
  nombre: string = '';
  fechaInicio: Date | null = null;
  fechaFin: Date | null = null;
  errorMessage: string = '';
  competencias: { nombre: string; fechaInicio: Date; fechaFin: Date }[] = [];
  dataSource = new MatTableDataSource(this.competencias); // Define dataSource
  displayedColumns: string[] = ['nombre', 'fechaInicio', 'fechaFin'];
  selectedFile: File | null = null;

  guardar() {
    this.errorMessage = ''; // Resetear el mensaje de error

    if (!this.nombre || !this.fechaInicio || !this.fechaFin) {
      this.errorMessage = 'Por favor, complete todos los campos obligatorios.';
      return;
    }

    const nuevaCompetencia = {
      nombre: this.nombre,
      fechaInicio: new Date(this.fechaInicio), // Asegura que se almacene como objeto Date
      fechaFin: new Date(this.fechaFin)
    };

    // Agregar la nueva competencia al array y actualizar dataSource
    this.competencias.push(nuevaCompetencia);
    this.dataSource.data = [...this.competencias]; // Actualiza dataSource

    this.resetForm();
  }
  
  resetForm() {
    this.nombre = '';
    this.fechaInicio = null;
    this.fechaFin = null;
  }

   onDragOver(event: DragEvent) {
    event.preventDefault();
    const dropZone = event.currentTarget as HTMLElement;
    dropZone.classList.add('dragover');
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const dropZone = event.currentTarget as HTMLElement;
    dropZone.classList.remove('dragover');

    if (event.dataTransfer?.files.length) {
      this.selectedFile = event.dataTransfer.files[0];
      console.log("Archivo seleccionado:", this.selectedFile);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFile = input.files[0];
      console.log("Archivo seleccionado:", this.selectedFile);
    }
  }

  guardarArchivo() {
    // Lógica para guardar el archivo
    console.log("Archivo guardado:", this.selectedFile);
  }
  cancelar() {
  this.resetForm(); // Limpia el formulario
  this.selectedFile = null; // Quita el archivo seleccionado
  console.log("Formulario cancelado");
}

}

