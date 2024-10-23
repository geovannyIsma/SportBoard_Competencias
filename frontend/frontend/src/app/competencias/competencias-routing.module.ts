import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionCompetenciaComponent } from '../competencias/GestionCompetencia/gestion-competencia.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'gestion-competencia',
    pathMatch: 'full'
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
