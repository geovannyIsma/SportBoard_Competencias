import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCompetenciesComponent } from './home-competencies/home-competencies.component';
import { AdminCompetenciasComponent } from './admin-competencias/admin-competencias.component';

const routes: Routes = [
  { path: '', component: HomeCompetenciesComponent },
  { path: 'admin-competence', component: AdminCompetenciasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetenciasRoutingModule { }
