import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCompetenciesComponent } from './home-competencies/home-competencies.component';
import { AdminCompetenciasComponent } from './admin-competencias/admin-competencias.component';
import { AdminDisciplinasComponent } from './admin-disciplinas/admin-disciplinas.component';
import { AdminRuleCompetenceComponent } from './admin-rule-competence/admin-rule-competence.component';
import { AdminRulesDisciplineComponent } from './admin-rules-discipline/admin-rules-discipline.component';

const routes: Routes = [
  { path: '', component: HomeCompetenciesComponent },
  { path: 'admin-competence', component: AdminCompetenciasComponent },
  { path: 'admin-discipline', component: AdminDisciplinasComponent },
  { path: 'admin-rules', component: AdminRuleCompetenceComponent },
  { path: 'admin-rules-discipline', component: AdminRulesDisciplineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetenciasRoutingModule { }
