import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-equipo',
  templateUrl: './card-equipo.component.html',
  styleUrls: ['./card-equipo.component.scss'],
  imports: [MatCardModule]
})
export class CardEquipoComponent {
  @Input() name!: string;
  @Input() image!: string;
}
