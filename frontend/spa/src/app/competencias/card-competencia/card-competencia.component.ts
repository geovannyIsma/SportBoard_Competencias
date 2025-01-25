import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-competencia',
  templateUrl: './card-competencia.component.html',
  styleUrls: ['./card-competencia.component.scss'],
  imports: [MatCardModule]
})
export class CardCompetenciaComponent {
  @Input() name!: string;
  @Input() image!: string;
}
