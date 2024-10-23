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

}
