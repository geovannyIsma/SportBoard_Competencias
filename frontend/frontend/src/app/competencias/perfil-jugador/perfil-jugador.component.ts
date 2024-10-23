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
    Nombre: 'Lionel Messi',
    NumJugador: '10',
    FechaNacimiento: '24/06/1987',
    Peso: '72 Kg',
    Altura: '1.7m',
    Nacionalidad: 'Argentino',
    Telefono: '0000000000',
    Email: 'lionel.messi@gmail.com'

  };

  PerfilInformacion = {
    Equipo: 'Manchester City',
    Entrenador: 'Pep Guardiola',
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
