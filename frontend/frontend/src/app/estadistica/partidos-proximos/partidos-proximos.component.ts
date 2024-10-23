import { Component, OnInit } from '@angular/core';

export interface Partido {
  equipoLocal: string;
  equipoVisitante: string;
  fecha: string;
}

@Component({
  selector: 'app-partidos-proximos',
  templateUrl: './partidos-proximos.component.html',
  styleUrls: ['./partidos-proximos.component.scss']
})
export class PartidosProximosComponent implements OnInit {

  displayedColumns: string[] = ['equipoLocal', 'equipoVisitante', 'fecha'];
  dataSource: Partido[] = [
    { equipoLocal: 'Equipo A', equipoVisitante: 'Equipo B', fecha: '2023-10-01' },
    { equipoLocal: 'Equipo C', equipoVisitante: 'Equipo D', fecha: '2023-10-02' },
    { equipoLocal: 'Equipo E', equipoVisitante: 'Equipo F', fecha: '2023-10-03' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}