import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilesComponent } from '../competencias/perfiles/perfiles.component';
import { GestionCompetenciaComponent } from '../competencias/GestionCompetencia/gestion-competencia.component';
import { PerfilEquipoComponent } from '../competencias/perfil-equipo/perfil-equipo.component';
import { PerfilJugadorComponent } from '../competencias/perfil-jugador/perfil-jugador.component';
import { GestionEquipoComponent } from '../competencias/gestion-equipo/gestion-equipo.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'perfiles',
    pathMatch: 'full'
  },
  {
    path: 'perfiles',
    component: PerfilesComponent
  },
  {
    path: 'gestion-competencia',
    component: GestionCompetenciaComponent
  },

  { path: 'gestion-equipo',
    component: GestionEquipoComponent
  },
  {
    path: 'perfil-equipo',
    component: PerfilEquipoComponent
  },
  {
    path: 'perfil-jugador',
    component: PerfilJugadorComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetenciasRoutingModule { }
