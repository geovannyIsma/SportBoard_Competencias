import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card-equipo',
    imports: [],
    templateUrl: './card-equipo.component.html',
    styleUrl: './card-equipo.component.scss'
})
export class CardEquipoComponent {
  //Irían los atributos que recibo del Padre
  @Input() equipo: any;
}
