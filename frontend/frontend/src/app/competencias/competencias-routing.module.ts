import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilesComponent } from '../competencias/perfiles/perfiles.component';
import { GestionCompetenciaComponent } from '../competencias/GestionCompetencia/gestion-competencia.component';

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
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetenciasRoutingModule { }
