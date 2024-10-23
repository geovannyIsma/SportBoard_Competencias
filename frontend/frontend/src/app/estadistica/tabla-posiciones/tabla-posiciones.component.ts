import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla-posiciones',
  templateUrl: './tabla-posiciones.component.html',
  styleUrls: ['./tabla-posiciones.component.scss']
})
export class TablaPosicionesComponent {
  displayedColumns: string[] = ['equipo', 'puntos', 'partidosJugados', 'partidosGanados', 'partidosEmpatados', 'partidosPerdidos'];
  dataSource = [
    { equipo: 'Equipo A', puntos: 30, partidosJugados: 10, partidosGanados: 9, partidosEmpatados: 1, partidosPerdidos: 0 },
    { equipo: 'Equipo B', puntos: 25, partidosJugados: 10, partidosGanados: 8, partidosEmpatados: 1, partidosPerdidos: 1 },
    // Agrega más datos según sea necesario
  ];
}