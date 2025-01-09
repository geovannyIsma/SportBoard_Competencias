import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-competencias',
  standalone: true,
  imports: [],
  templateUrl: './card-competencias.component.html',
  styleUrl: './card-competencias.component.scss'
})
export class CardCompetenciasComponent {
@Input() competencia: any;
}
