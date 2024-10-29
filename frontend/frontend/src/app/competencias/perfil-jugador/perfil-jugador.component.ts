import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-perfil-jugador',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './perfil-jugador.component.html',
  styleUrl: './perfil-jugador.component.scss'
})

export class PerfilJugadorComponent {
  modoEdicion = false; 

  modificarInfo() {
    this.modoEdicion = true;
  }
  guardarCambios() {
    alert('Cambios guardados exitosamente.');
    this.modoEdicion = false; // Se desactiva el modo edición
  }

  cancelarEdicion() {
    alert('Edición cancelada.');
    this.modoEdicion = false; // Se desactiva el modo edición
  }

  onClickB2() {
    alert('Ha hecho click en Estadísticas Detalladas');
    
  }
  onClickB3() {
    alert('Ha hecho click en Historial de Lesiones');
    
  }
  onClickB4() {
    alert('Ha hecho click en Historial de Clubes');
    
  }
  onClickB5() {
    alert('Ha hecho click en Historial de Entrenamientos');
    
  }

}
