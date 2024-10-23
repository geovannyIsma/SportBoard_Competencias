import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PartidoModalComponent } from '../partido-modal/partido-modal.component';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {
  displayedColumns: string[] = ['localTeam', 'awayTeam', 'result', 'date'];
  dataSource = [
    { 
      localTeam: 'FC Barcelona', 
      awayTeam: 'Real Madrid', 
      result: '2-1', 
      date: '2023-10-01',
      team1: { 
        possession: 55, goals: 2, shots: 10, fouls: 5, 
        lineup: [
          { name: 'Player 1', color: '#FF0000', position: 'gk' }, 
          { name: 'Player 2', color: '#FF0000', position: 'def1' }, 
          { name: 'Player 3', color: '#FF0000', position: 'def2' },
          { name: 'Player 4', color: '#FF0000', position: 'def3' },
          { name: 'Player 5', color: '#FF0000', position: 'mid1' },
          { name: 'Player 6', color: '#FF0000', position: 'mid2' },
          { name: 'Player 7', color: '#FF0000', position: 'mid3' },
          { name: 'Player 8', color: '#FF0000', position: 'mid4' },
          { name: 'Player 9', color: '#FF0000', position: 'fwd1' },
          { name: 'Player 10', color: '#FF0000', position: 'fwd2' },
          { name: 'Player 11', color: '#FF0000', position: 'fwd3' }
        ]
      },
      team2: { 
        possession: 45, goals: 1, shots: 8, fouls: 7, 
        lineup: [
          { name: 'Player A', color: '#0000FF', position: 'gk' }, 
          { name: 'Player B', color: '#0000FF', position: 'def1' }, 
          { name: 'Player C', color: '#0000FF', position: 'def2' },
          { name: 'Player D', color: '#0000FF', position: 'def3' },
          { name: 'Player E', color: '#0000FF', position: 'mid1' },
          { name: 'Player F', color: '#0000FF', position: 'mid2' },
          { name: 'Player G', color: '#0000FF', position: 'mid3' },
          { name: 'Player H', color: '#0000FF', position: 'mid4' },
          { name: 'Player I', color: '#0000FF', position: 'fwd1' },
          { name: 'Player J', color: '#0000FF', position: 'fwd2' },
          { name: 'Player K', color: '#0000FF', position: 'fwd3' }
        ]
      }
    },
    // otros resultados con estadísticas variadas
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(row: any): void {
    this.dialog.open(PartidoModalComponent, {
      data: {
        team1: row.team1,
        team2: row.team2
      }
    });
  }
}