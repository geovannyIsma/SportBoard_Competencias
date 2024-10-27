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

  PerfilJugador = {
    Nombre: 'Lamine Yamal',
    Edad: '17 años',
    Peso: '72 Kg',
    Altura: '1.8m',
    Nacionalidad: 'Español',
  };

  PerfilInformacion = {
    Equipo: 'F. C. Barcelona',
    Entrenador: 'Hansi Flick',
    Posicion: 'Delantero',
    Rendimiento: '10 Estrellas'
  }

  onClickB1() {
    alert('Ha hecho click en modificar');

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
