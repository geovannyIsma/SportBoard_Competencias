import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetenciasRoutingModule } from './competencias-routing.module';
import { PerfilesComponent } from '../competencias/perfiles/perfiles.component';
import { PerfilJugadorComponent } from '../competencias/perfil-jugador/perfil-jugador.component';
import { GestionCompetenciaComponent } from './GestionCompetencia/gestion-competencia.component';
import { PerfilEquipoComponent } from './perfil-equipo/perfil-equipo.component';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PerfilesComponent,
    PerfilEquipoComponent,
    CompetenciasRoutingModule,
  ]
})

export class CompetenciasModule { }

