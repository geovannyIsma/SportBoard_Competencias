import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetenciasRoutingModule } from './competencias-routing.module';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { PerfilJugadorComponent } from './perfil-jugador/perfil-jugador.component';
import { GestionCompetenciaComponent } from './GestionCompetencia/gestion-competencia.component';
import { PerfilEquipoComponent } from './perfil-equipo/perfil-equipo.component';
import { GestionEquipoComponent } from './gestion-equipo/gestion-equipo.component';
import {PerfilReglasComponent} from './perfil-reglas/perfil-reglas.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PerfilesComponent,
    PerfilEquipoComponent,
      PerfilReglasComponent,
    CompetenciasRoutingModule,
    PerfilJugadorComponent,
    CompetenciasRoutingModule,
    GestionCompetenciaComponent,
    GestionEquipoComponent,
    MatIconModule
  ]
})

export class CompetenciasModule { }

