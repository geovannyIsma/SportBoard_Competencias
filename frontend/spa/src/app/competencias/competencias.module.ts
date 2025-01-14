import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Add this import

import { CompetenciasRoutingModule } from './competencias-routing.module';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { PerfilJugadorComponent } from './perfil-jugador/perfil-jugador.component';
import { GestionCompetenciaComponent } from './GestionCompetencia/gestion-competencia.component';
import { PerfilEquipoComponent } from './perfil-equipo/perfil-equipo.component';
import { GestionEquipoComponent } from './gestion-equipo/gestion-equipo.component';
import { PerfilReglasComponent } from './perfil-reglas/perfil-reglas.component';
import { MatIconModule } from '@angular/material/icon';
import { ApiService } from './services/api.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { TestApiComponent } from './test-api/test-api.component';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [
    TestApiComponent,

  ],
  imports: [
    CommonModule,
    FormsModule, // Add this line
    PerfilesComponent,
    PerfilEquipoComponent,
    PerfilReglasComponent,
    CompetenciasRoutingModule,
    PerfilJugadorComponent,
    CompetenciasRoutingModule,
    GestionCompetenciaComponent,
    GestionEquipoComponent,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [
    ApiService
  ],
})
export class CompetenciasModule { }