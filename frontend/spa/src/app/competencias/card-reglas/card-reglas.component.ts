import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-card-reglas',
    imports: [],
    templateUrl: './card-reglas.component.html',
    styleUrl: './card-reglas.component.scss'
})
export class CardReglasComponent {
@Input() reglas: any;
}
