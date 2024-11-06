import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-perfil-equipo',
  standalone: true,
  imports: [
    RouterModule,MatCard,SharedModule],
  templateUrl: './perfil-equipo.component.html',
  styleUrl: './perfil-equipo.component.scss'
})
export class PerfilEquipoComponent {
  modoEdicion = false; // Esta variable se usa para validar si estamos en modo editar o no

  modificarEquipo() {
    this.modoEdicion = true; // Habilita los campos y muestrar botones Confirmar/Cancelar
  }

  guardarCambios() {
    alert('Cambios guardados exitosamente.');
    this.modoEdicion = false; // Se desactiva el modo edición
  }

  cancelarEdicion() {
    alert('Edición cancelada.');
    this.modoEdicion = false; // Se desactiva el modo edición
  }
}
