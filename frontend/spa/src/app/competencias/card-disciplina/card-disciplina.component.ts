import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-disciplina',
  templateUrl: './card-disciplina.component.html',
  styleUrls: ['./card-disciplina.component.scss'],
  imports: [MatCardModule]
})
export class CardDisciplinaComponent {
  @Input() name!: string;
  @Input() image!: string;
}
