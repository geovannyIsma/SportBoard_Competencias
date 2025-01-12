import { Component } from '@angular/core';
import { mockMatches } from '../data';

@Component({
  selector: 'app-resultados-estadistica',
  templateUrl: './resultados-estadistica.component.html',
  styleUrl: './resultados-estadistica.component.scss'
})
export class ResultadosEstadisticaComponent {
  results = mockMatches

  constructor() { }

  ngOnInit(): void {
  }
}
