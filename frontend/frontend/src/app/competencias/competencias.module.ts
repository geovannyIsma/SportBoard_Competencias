import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetenciasRoutingModule } from './competencias-routing.module';
import { PerfilJugadorComponent } from '../competencias/perfil-jugador/perfil-jugador.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CompetenciasRoutingModule,
    MatIconModule
  ]
})
export class CompetenciasModule { }
