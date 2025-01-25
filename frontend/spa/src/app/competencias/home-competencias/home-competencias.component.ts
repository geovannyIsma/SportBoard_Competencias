import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloSeccionComponent } from '../titulo-seccion/titulo-seccion.component';
import { CardDisciplinaComponent } from '../card-disciplina/card-disciplina.component';
import { CardCompetenciaComponent } from '../card-competencia/card-competencia.component';
import { CardEquipoComponent } from '../card-equipo/card-equipo.component';
import { SharedModule } from '../../shared/shared.module';
import { CardJugadorComponent } from '../card-jugador/card-jugador.component';

@Component({
  selector: 'app-home-competencias',
  templateUrl: './home-competencias.component.html',
  styleUrls: ['./home-competencias.component.scss'],
  imports: [
    CommonModule,
    TituloSeccionComponent,
    CardDisciplinaComponent,
    CardCompetenciaComponent,
    CardEquipoComponent,
    SharedModule,
    CardJugadorComponent
  ]
})
export class HomeCompetenciasComponent {
  disciplinas = [
    { name: 'Disciplina 1', image: 'https://placehold.co/150x150' },
    { name: 'Disciplina 2', image: 'https://placehold.co/150x150' },
    // ...more mock data
  ];

  competencias = [
    { name: 'Competencia 1', image: 'https://placehold.co/150x150' },
    { name: 'Competencia 2', image: 'https://placehold.co/150x150' },
    // ...more mock data
  ];

  equipos = [
    { name: 'Equipo 1', image: 'https://placehold.co/150x150' },
    { name: 'Equipo 2', image: 'https://placehold.co/150x150' },
    // ...more mock data
  ];

  jugadores = [
    { name: 'Jugador 1', image: 'https://placehold.co/150x150' },
    { name: 'Jugador 2', image: 'https://placehold.co/150x150' },
    // ...more mock data
  ];
}
