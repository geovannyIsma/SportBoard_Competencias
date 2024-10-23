import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { EstadisticasEquiposComponent } from './estadisticas-equipos/estadisticas-equipos.component';
import { EstadisticasJugadoresComponent } from './estadisticas-jugadores/estadisticas-jugadores.component';
import { PartidosProximosComponent } from './partidos-proximos/partidos-proximos.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { TablaPosicionesComponent } from './tabla-posiciones/tabla-posiciones.component';

const routes: Routes = [
  { path: '', component: EstadisticasComponent, children: [
    { path: 'equipos', component: EstadisticasEquiposComponent },
    { path: 'jugadores', component: EstadisticasJugadoresComponent },
    { path: 'partidos-proximos', component: PartidosProximosComponent },
    { path: 'resultados', component: ResultadosComponent },
    { path: 'tabla-posiciones', component: TablaPosicionesComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadisticasRoutingModule { }