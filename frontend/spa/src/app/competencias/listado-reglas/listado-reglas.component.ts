import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {Router} from '@angular/router';

@Component({
  selector: 'app-listado-reglas',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardTitle,
        MatIcon
    ],
  templateUrl: './listado-reglas.component.html',
  styleUrl: './listado-reglas.component.scss'
})
export class ListadoReglasComponent {
reglas = [
    {
      nombre: 'LIGA',
      //escudo: 'assets/escudos/barcelona.png',
      activo: true,
        N_Reglass:30

    },
    {
      nombre: 'TORNEO',
      //escudo: 'assets/escudos/realmadrid.png',
       activo: true,
        N_Reglass:30
    },
    {
        nombre: 'ELIMINATORIA',
      //escudo: 'assets/escudos/realmadrid.png',
       activo: true,
        N_Reglass:30
    }

  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Aquí podrías hacer una petición HTTP para traer los equipos desde la BD
  }

  confirmarEliminar(event: Event) {
    event.preventDefault();
    const confirmado = confirm(`¿Estás seguro de que quieres eliminar estas reglas ?`);

    if (confirmado) {
      alert("Se ha eliminado las reglas de la competencia seleccionada")
    }
  }

  navigateToPerfilReglas() {

    this.router.navigate(['/competencias/perfil-reglas']);
  }
  /*
  equipos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://api.miapp.com/equipos')
      .subscribe(data => {
        this.equipos = data;
      });
  }*/
}
