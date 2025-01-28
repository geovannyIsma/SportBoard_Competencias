import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCompetenciesComponent } from './home-competencies/home-competencies.component';
import { CompetenceDialogFormComponent } from './competence-dialog-form/competence-dialog-form.component';

const routes: Routes = [
  { path: '', component: HomeCompetenciesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetenciasRoutingModule { }
