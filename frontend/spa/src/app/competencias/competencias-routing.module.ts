import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCompetenciesComponent } from './home-competencies/home-competencies.component';
import { AdminCompetenciasComponent } from './admin-competencias/admin-competencias.component';
import { AdminDisciplinasComponent } from './admin-disciplinas/admin-disciplinas.component';
import { AdminRuleCompetenceComponent } from './admin-rule-competence/admin-rule-competence.component';

const routes: Routes = [
  { path: '', component: HomeCompetenciesComponent },
  { path: 'admin-competence', component: AdminCompetenciasComponent },
  { path: 'admin-discipline', component: AdminDisciplinasComponent },
  { path: 'admin-rules', component: AdminRuleCompetenceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetenciasRoutingModule { }
