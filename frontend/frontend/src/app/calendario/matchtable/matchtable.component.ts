import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Partido {
  escudo1: string;
  nombreEq1: string;
  puntaje1: number;
  puntaje2: number;
  nombreEq2: string;
  escudo2: string;
  estadio: string;
  fecha: string;
  hora: string;
}

@Component({
  selector: 'app-matchtable',
  standalone: true,
  imports: [RouterModule], // Aquí no es necesario incluir SharedModule porque ya se importa en el módulo
  templateUrl: './matchtable.component.html',
  styleUrl: './matchtable.component.scss'
})
export class MatchtableComponent {
  displayedColumns: string[] = ['equipo1', 'puntaje', 'equipo2', 'estadio', 'fecha', 'hora'];

}
