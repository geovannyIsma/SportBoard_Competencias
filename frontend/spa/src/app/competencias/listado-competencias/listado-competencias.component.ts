import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { Router } from '@angular/router';
@Component({
    selector: 'app-listado-competencias',
    imports: [
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardTitle,
        MatIcon,
        RouterModule,
        SharedModule
    ],
    templateUrl: './listado-competencias.component.html',
    styleUrl: './listado-competencias.component.scss'
})
export class ListadoCompetenciasComponent {
equipos = [
    {
      nombre: 'LIGA',
      //escudo: 'assets/escudos/barcelona.png',
      activo: true,
      fechaInicio: '28/04/2024',
      fechaFin: '28/04/2025'
    },
    {
      nombre: 'ELIMINATORIA',
      //escudo: 'assets/escudos/realmadrid.png',
      activo: true,
      fechaInicio: '10/03/2024',
      fechaFin: '28/10/2025'
    },
     {
      nombre: 'TORNEO',
      //escudo: 'assets/escudos/realmadrid.png',
      activo: true,
         fechaInicio: '10/03/2024',
      fechaFin: '25/05/2025'
    }

  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Aquí podrías hacer una petición HTTP para traer las competencias desde la BD
  }

  confirmarEliminar(event: Event) {
    event.preventDefault();
    const confirmado = confirm(`¿Estás seguro de que quieres eliminar esta competencia ?`);

    if (confirmado) {
      alert("Se ha eliminado la competencia seleccionada")
    }
  }

  navigatePerfilCompetencia() {

    this.router.navigate(['/competencias/gestion-competencia']);
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
