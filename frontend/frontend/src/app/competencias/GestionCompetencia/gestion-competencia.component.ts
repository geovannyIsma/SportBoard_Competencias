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
  competencias: any[] = [];
  displayedColumns: string[] = ['nombre', 'fechaInicio', 'fechaFin'];
  guardar() {
    this.errorMessage = ''; // Resetear el mensaje de error

    if (!this.nombre || !this.fechaInicio || !this.fechaFin) {
      this.errorMessage = 'Por favor, complete todos los campos obligatorios.'; // Mensaje de error
      return;
    }

    const nuevaCompetencia = {
      nombre: this.nombre,
      fechaInicio: this.fechaInicio.toLocaleDateString(), 
      fechaFin: this.fechaFin.toLocaleDateString() 
    };
    this.competencias.push(nuevaCompetencia);
    this.resetForm();
  }
  resetForm() {
    this.nombre = '';
    this.fechaInicio = null;
    this.fechaFin = null;
  }
}

