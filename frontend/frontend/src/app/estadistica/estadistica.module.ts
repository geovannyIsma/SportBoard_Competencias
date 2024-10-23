import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { EstadisticasRoutingModule } from './estadistica-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EstadisticasEquiposComponent } from './estadisticas-equipos/estadisticas-equipos.component';
import { EstadisticasJugadoresComponent } from './estadisticas-jugadores/estadisticas-jugadores.component';
import { PartidosProximosComponent } from './partidos-proximos/partidos-proximos.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { TablaPosicionesComponent } from './tabla-posiciones/tabla-posiciones.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { PartidoModalComponent } from './partido-modal/partido-modal.component';

@NgModule({
  declarations: [
    EstadisticasComponent,
    EstadisticasEquiposComponent,
    EstadisticasJugadoresComponent,
    PartidosProximosComponent,
    ResultadosComponent,
    TablaPosicionesComponent,
    PartidoModalComponent
  ],
  imports: [
    CommonModule,
    EstadisticasRoutingModule,
    SharedModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class EstadisticaModule { }