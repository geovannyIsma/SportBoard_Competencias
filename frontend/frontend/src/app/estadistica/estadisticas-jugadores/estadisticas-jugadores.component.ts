import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estadisticas-jugadores',
  templateUrl: './estadisticas-jugadores.component.html',
  styleUrls: ['./estadisticas-jugadores.component.scss']
})
export class EstadisticasJugadoresComponent implements OnInit {
  players = [
    { name: 'Lionel Messi', points: 30, assists: 5, performanceRate: 90, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/220px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg' },
    { name: 'Cristiano Ronaldo', points: 20, assists: 7, performanceRate: 75, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg' },
    // otros jugadores
  ];

  ngOnInit(): void {}
}