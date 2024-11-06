import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilesComponent } from '../competencias/perfiles/perfiles.component';
import { GestionCompetenciaComponent } from '../competencias/GestionCompetencia/gestion-competencia.component';
import { PerfilEquipoComponent } from '../competencias/perfil-equipo/perfil-equipo.component';
import { PerfilJugadorComponent } from '../competencias/perfil-jugador/perfil-jugador.component';
import { GestionEquipoComponent } from '../competencias/gestion-equipo/gestion-equipo.component';
import { ListadoEquiposComponent } from './listado-equipos/listado-equipos.component';
import { PerfilReglasComponent} from './perfil-reglas/perfil-reglas.component';
import { ListadoCompetenciasComponent} from './listado-competencias/listado-competencias.component';
import { ListadoJugadoresComponent} from './listado-jugadores/listado-jugadores.component';
import {ListadoReglasComponent} from './listado-reglas/listado-reglas.component';

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
    path: '',
    redirectTo: 'perfil-jugador',  // Redirige automáticamente al componente Perfil Jugador
    pathMatch: 'full'
  },
  {
    path: 'perfil-jugador',
    component: PerfilJugadorComponent //Ruta del componente
  },

  { path: 'gestion-equipo',
    component: GestionEquipoComponent
  },
  {
    path: 'listado-competencia',
    component: ListadoCompetenciasComponent
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
        path:'listado-jugador',
        component: ListadoJugadoresComponent
    },
    {
    path: 'perfil-reglas',
    component: PerfilReglasComponent
  },
    {
    path: 'listado-reglas',
    component: ListadoReglasComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetenciasRoutingModule{ }
