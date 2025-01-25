import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormatCatalogService } from '../services/competencies/format-catalog.service';
import { FormatItemService } from '../services/competencies/format-item.service';
import { HomeCompetenciasComponent } from './home-competencias/home-competencias.component';
import { AdministracionCompetencesComponent } from './administracion-competences/administracion-competences.component';

const routes: Routes = [
  { path: '', component: HomeCompetenciasComponent },
  { path: 'administracion', component: AdministracionCompetencesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetenciasRoutingModule { }
