import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-jugador',
  templateUrl: './card-jugador.component.html',
  styleUrls: ['./card-jugador.component.scss'],
  imports: [MatCardModule]
})
export class CardJugadorComponent {
  @Input() name!: string;
  @Input() image!: string;
}
