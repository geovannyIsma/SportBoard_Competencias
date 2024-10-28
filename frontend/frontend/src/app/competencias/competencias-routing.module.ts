import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilesComponent } from '../competencias/perfiles/perfiles.component';
import { GestionCompetenciaComponent } from '../competencias/GestionCompetencia/gestion-competencia.component';
import { PerfilEquipoComponent } from '../competencias/perfil-equipo/perfil-equipo.component';
import { PerfilJugadorComponent } from '../competencias/perfil-jugador/perfil-jugador.component';
import { ListadoEquiposComponent } from './listado-equipos/listado-equipos.component';

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
  {
    path: 'perfil-equipo',
    component: PerfilEquipoComponent
  },
  {
    path: 'listado-equipos',
    component: ListadoEquiposComponent
  },
  {
    path: 'perfil-jugador',
    component: PerfilJugadorComponent
  },
    {
    path: 'perfil-reglas',
    component: PerfilReglasComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetenciasRoutingModule { }
