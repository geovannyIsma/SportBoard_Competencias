import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {Router} from '@angular/router';

@Component({
    selector: 'app-listado-jugadores',
    imports: [
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardTitle,
        MatIcon
    ],
    templateUrl: './listado-jugadores.component.html',
    styleUrl: './listado-jugadores.component.scss'
})
export class ListadoJugadoresComponent {
jugador = [
    {
      nombre: 'BARCELONA',
      //escudo: 'assets/escudos/barcelona.png',
      activo: true,
      equipo: 'Barcelona',
        entrenador:'Hansi Flick',
      posicion: 'Delantero'
    },
    {
      nombre: 'LIVERPOOL',
      //escudo: 'assets/escudos/realmadrid.png',
      activo: true,
      equipo: 'Liverpool',
      entrenador: 'Arne Slot',
        posicion:'Defensa'

    },
     {
      nombre: 'REAL MADRID',
      //escudo: 'assets/escudos/realmadrid.png',
      activo: true,
         equipo: 'Real Madrid',
      entrenador: 'Carlo Ancelotti',
         posicion: 'Extreo Derecho'
    },
    {
        nombre:'MANCHESTER UNITED',
        activo: true,
        equipo:'Manchester United',
        entrenador:'Erik ten Hag',
        posicion: 'Mediocampista'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Aquí podrías hacer una petición HTTP para traer las competencias desde la BD
  }

  confirmarEliminar(event: Event) {
    event.preventDefault();
    const confirmado = confirm(`¿Estás seguro de que quieres eliminar este jugador ?`);

    if (confirmado) {
      alert("Se ha eliminado el jugador seleccionado")
    }
  }

  navigatePerfilJugador() {

    this.router.navigate(['/competencias/perfil-jugador']);
  }
  /*
  competencias: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://api.miapp.com/competencias')
      .subscribe(data => {
        this.competencias = data;
      });
  }*/
}

