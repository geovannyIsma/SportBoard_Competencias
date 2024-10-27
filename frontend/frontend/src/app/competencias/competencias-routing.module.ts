import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Importe del componente
import { PerfilJugadorComponent } from '../competencias/perfil-jugador/perfil-jugador.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'perfil-jugador',  // Redirige automáticamente al componente Perfil Jugador
    pathMatch: 'full'
  },
  {
    path: 'perfil-jugador',
    component: PerfilJugadorComponent //Ruta del componente
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetenciasRoutingModule { }
