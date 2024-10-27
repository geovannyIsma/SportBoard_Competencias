import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
<<<<<<< Updated upstream
import { Router } from '@angular/router';
import { GestionCompetenciaComponent} from '../GestionCompetencia/gestion-competencia.component';
import { PerfilEquipoComponent } from '../perfil-equipo/perfil-equipo.component';
=======
import { Router, RouterModule } from '@angular/router';
>>>>>>> Stashed changes
@Component({
  selector: 'app-perfiles',
  standalone: true,
  imports: [
    MatIconModule,
    RouterModule
  ],
  templateUrl: './perfiles.component.html',
  styleUrl: './perfiles.component.scss'
})
export class PerfilesComponent {
  constructor(private router: Router) { }
  
  navigateToPerfilEquipo() {
    this.router.navigate(['/competencias/perfil-equipo']); 
  }

  navigateToPerfilJugador() {
    this.router.navigate(['/competencias/perfil-jugador']); 
  }

  navigateToGestionCompetencia() {
<<<<<<< Updated upstream
    this.router.navigate(['/competencias/gestion-competencia']); 
=======
    this.router.navigate(['/competencias/gestion-competencia']);
>>>>>>> Stashed changes
  }
}
