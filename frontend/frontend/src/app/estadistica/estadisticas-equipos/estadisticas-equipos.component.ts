import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estadisticas-equipos',
  templateUrl: './estadisticas-equipos.component.html',
  styleUrls: ['./estadisticas-equipos.component.scss']
})
export class EstadisticasEquiposComponent implements OnInit {
  teams = [
    { name: 'FC Barcelona', wins: 10, losses: 2, winRate: 83, imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg' },
    { name: 'Real Madrid', wins: 8, losses: 4, winRate: 67, imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg' },
    // otros equipos
  ];

  ngOnInit(): void {}
}