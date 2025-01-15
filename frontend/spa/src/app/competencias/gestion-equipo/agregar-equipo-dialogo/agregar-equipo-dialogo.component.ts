import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-agregar-equipo-dialogo',
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCardModule
    ],
    templateUrl: './agregar-equipo-dialogo.component.html',
    styleUrls: ['./agregar-equipo-dialogo.component.scss']
})
export class AgregarEquipoDialogoComponent {
  nombre: string = '';
  fechaFundacion: Date | null = null; 
  pais: string = '';
  correoElectronico: string = '';
  telefono: string = '';
  errorMessage: string = '';

  constructor(public dialogRef: MatDialogRef<AgregarEquipoDialogoComponent>) {}

  guardar() {
    if (!this.nombre || !this.fechaFundacion || !this.pais || !this.correoElectronico || !this.telefono) {
      this.errorMessage = 'Todos los campos son obligatorios.';
      return;
    }

    this.dialogRef.close({ 
      nombre: this.nombre, 
      fechaFundacion: this.fechaFundacion, 
      pais: this.pais, 
      correoElectronico: this.correoElectronico, 
      telefono: this.telefono 
    });
  }

  resetForm() {
    this.nombre = '';
    this.fechaFundacion = null;
    this.pais = '';
    this.correoElectronico = '';
    this.telefono = '';
    this.errorMessage = ''; 
  }
}