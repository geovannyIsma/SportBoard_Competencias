import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-jugador',
  standalone: true,
  imports: [],
  templateUrl: './card-jugador.component.html',
  styleUrl: './card-jugador.component.scss'
})
export class CardJugadorComponent {
@Input() jugador: any;
}
