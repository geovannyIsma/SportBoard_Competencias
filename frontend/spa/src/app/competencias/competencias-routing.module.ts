import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCompetenciesComponent } from './home-competencies/home-competencies.component';
import { AdminCompetenciasComponent } from './admin-competencias/admin-competencias.component';
import { AdminDisciplinasComponent } from './admin-disciplinas/admin-disciplinas.component';
import { AdminRuleCompetenceComponent } from './admin-rule-competence/admin-rule-competence.component';
import { AdminRulesDisciplineComponent } from './admin-rules-discipline/admin-rules-discipline.component';
import { AdminFormatsComponent } from './admin-formats/admin-formats.component';
import { AdminEquiposComponent } from './admin-equipos/admin-equipos.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';

const routes: Routes = [
  { path: '', component: HomeCompetenciesComponent },
  { path: 'admin-competence', component: AdminCompetenciasComponent },
  { path: 'admin-discipline', component: AdminDisciplinasComponent },
  { path: 'admin-rules', component: AdminRuleCompetenceComponent },
  { path: 'admin-rules-discipline', component: AdminRulesDisciplineComponent },
  { path: 'admin-formats', component: AdminFormatsComponent },
  { path: 'admin-equipos', component: AdminEquiposComponent },
  {path: 'admin-users', component: AdminUsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetenciasRoutingModule { }
