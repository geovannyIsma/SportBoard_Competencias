import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";

@Component({
  selector: 'app-perfil-reglas',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MatCardHeader
    ],
  templateUrl: './perfil-reglas.component.html',
  styleUrl: './perfil-reglas.component.scss'
})
export class PerfilReglasComponent {

}
