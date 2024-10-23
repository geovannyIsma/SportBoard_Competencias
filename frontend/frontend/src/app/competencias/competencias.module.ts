import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetenciasRoutingModule } from './competencias-routing.module';
import { PerfilesComponent } from '../competencias/perfiles/perfiles.component';
import { GestionCompetenciaComponent } from './GestionCompetencia/gestion-competencia.component';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PerfilesComponent,
    CompetenciasRoutingModule,
  ]
})

export class CompetenciasModule { }

