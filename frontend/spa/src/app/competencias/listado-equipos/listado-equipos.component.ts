import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MatCard } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
    selector: 'app-listado-equipos',
    imports: [RouterModule, MatCard, SharedModule],
    templateUrl: './listado-equipos.component.html',
    styleUrl: './listado-equipos.component.scss'
})
export class ListadoEquiposComponent {
  equipos = [
    {
      nombre: 'Barcelona',
      //escudo: 'assets/escudos/barcelona.png',
      activo: true,
      entrenador: 'Brian',
      categoria: 'Primera División'
    },
    {
      nombre: 'Real Madrid',
      //escudo: 'assets/escudos/realmadrid.png',
      activo: true,
      entrenador: 'Carlo Ancelotti',
      categoria: 'Primera División'
    }
    
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Aquí podrías hacer una petición HTTP para traer los equipos desde la BD
  }

  confirmarEliminar(event: Event) {
    event.preventDefault();
    const confirmado = confirm(`¿Estás seguro de que quieres eliminar este equipo ?`);

    if (confirmado) {
      alert("Se ha eliminado el equipo seleccionado")
    }
  }

  navigateToPerfilEquipo() {
    
    this.router.navigate(['/competencias/perfil-equipo']); 
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
