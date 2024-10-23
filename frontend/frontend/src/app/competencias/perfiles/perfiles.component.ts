import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { GestionCompetenciaComponent} from '../GestionCompetencia/gestion-competencia.component';
@Component({
  selector: 'app-perfiles',
  standalone: true,
  imports: [
    MatIconModule,
  ],
  templateUrl: './perfiles.component.html',
  styleUrl: './perfiles.component.scss'
})
export class PerfilesComponent {
  constructor(private router: Router) { }
  
  navigateToCalendario() {
    this.router.navigate(['/calendario']); 
  }

  navigateToTiempoReal() {
    this.router.navigate(['/tiempo-real']); 
  }

  navigateToGestionCompetencia() {
    this.router.navigate(['/gestion-competencia']); 
  }
}
