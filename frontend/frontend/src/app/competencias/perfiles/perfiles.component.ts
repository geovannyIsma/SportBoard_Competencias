import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { GestionCompetenciaComponent} from '../GestionCompetencia/gestion-competencia.component';
import { PerfilEquipoComponent } from '../perfil-equipo/perfil-equipo.component';
@Component({
  selector: 'app-perfiles',
  standalone: true,
  imports: [
    MatIconModule,
     GestionCompetenciaComponent,
     PerfilEquipoComponent
   ],
  templateUrl: './perfiles.component.html',
  styleUrl: './perfiles.component.scss'
})
export class PerfilesComponent {
  constructor(private router: Router) { }

  navigateToPerfilEquipo() {
    //this.router.navigate(['/competencias/perfil-equipo']);
    this.router.navigate(['/competencias/listado-equipos']);
  }

  navigateToPerfilJugador() {
    this.router.navigate(['/competencias/listado-jugador']);
  }
  navigateToPerfilReglas() {
    this.router.navigate(['/competencias/listado-reglas']);
  }
  navigateToGestionCompetencia() {
    this.router.navigate(['/competencias/gestion-competencia']);
  }

  navigateToGestionEquipo() {
    this.router.navigate(['/competencias/gestion-equipo']);
  }
}
