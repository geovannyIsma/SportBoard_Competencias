import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-seccion',
  templateUrl: './titulo-seccion.component.html',
  styleUrls: ['./titulo-seccion.component.scss']
})
export class TituloSeccionComponent {
  @Input() title!: string;
}
