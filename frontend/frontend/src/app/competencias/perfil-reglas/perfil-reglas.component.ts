import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Para directivas *ngIf y *ngFor
import { FormsModule } from '@angular/forms';    // Para manejar formularios
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-perfil-reglas',
  standalone: true,
    imports: [
        CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule   ],
  templateUrl: './perfil-reglas.component.html',
  styleUrl: './perfil-reglas.component.scss'
})
export class PerfilReglasComponent {
descripcionRegla: string = '';
  reglas: Array<{ descripcion: string }> = [];
  reglaSeleccionada: { descripcion: string } | null = null;
  errorMessage: string = '';
  displayedColumns: string[] = ['descripcion'];
  tipoCompetencia: string = '';

  // Método para agregar una regla
  agregarRegla() {
    if (this.descripcionRegla.trim() !== '') {
      this.reglas.push({ descripcion: this.descripcionRegla });
      this.descripcionRegla = '';
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Por favor, ingrese una descripción para la regla.';
    }
  }

  // Método para seleccionar una regla
  seleccionarRegla(regla: { descripcion: string }) {
    this.reglaSeleccionada = regla;
    this.descripcionRegla = regla.descripcion;
  }

  // Método para modificar una regla seleccionada
  modificarRegla() {
    if (this.reglaSeleccionada) {
      const index = this.reglas.indexOf(this.reglaSeleccionada);
      if (index !== -1) {
        this.reglas[index].descripcion = this.descripcionRegla;
        this.reglaSeleccionada = null;
        this.descripcionRegla = '';
        this.errorMessage = '';
      }
    } else {
      this.errorMessage = 'Seleccione una regla para modificar.';
    }
  }

  // Método para eliminar una regla seleccionada con confirmación
  eliminarRegla() {
    if (this.reglaSeleccionada) {
      const confirmacion = confirm("¿Estás seguro de que deseas eliminar esta regla?");
      if (confirmacion) {
        const index = this.reglas.indexOf(this.reglaSeleccionada);
        if (index !== -1) {
          this.reglas.splice(index, 1);
          this.reglaSeleccionada = null;
          this.descripcionRegla = '';
          this.errorMessage = '';
        }
      }
    } else {
      this.errorMessage = 'Seleccione una regla para eliminar.';
    }
  }
}
