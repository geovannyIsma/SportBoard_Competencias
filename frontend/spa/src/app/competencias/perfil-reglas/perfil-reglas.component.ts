import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Para directivas *ngIf y *ngFor
import { FormsModule } from '@angular/forms';    // Para manejar formularios
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatCheckbox} from '@angular/material/checkbox';

@Component({
    selector: 'app-perfil-reglas',
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatDatepickerModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatCheckbox
    ],
    templateUrl: './perfil-reglas.component.html',
    styleUrl: './perfil-reglas.component.scss'
})
export class PerfilReglasComponent {
   descripcionRegla: string = '';
  reglas: Array<{ descripcion: string }> = [];
  reglaSeleccionada: { descripcion: string } | null = null;
  errorMessage: string = '';
  displayedColumns: string[] = ['descripcion'];
  tipoCompetencia: string = '';
  mostrarListaReglas = false;
   listaReglas = [
    { descripcion: 'Regla 1: Todos los jugadores deben estar registrados', seleccionada: false },
    { descripcion: 'Regla 2: No se permiten sustituciones de última hora', seleccionada: false },
    { descripcion: 'Regla 3: Los partidos deben comenzar puntualmente', seleccionada: false },
    { descripcion: 'Regla 4: Cada equipo debe tener un capitán asignado', seleccionada: false },
    { descripcion: 'Regla 5: Se deben usar uniformes oficiales en todos los juegos', seleccionada: false },
       { descripcion: 'Regla 6: Está prohibido el uso de dispositivos electrónicos durante el partido', seleccionada: false },
       { descripcion: 'Regla 7: Solo se permiten tres tiempos fuera por equipo por partido', seleccionada: false },
       { descripcion: 'Regla 8: Las faltas intencionales resultarán en expulsión del jugador', seleccionada: false },
       { descripcion: 'Regla 9: Todos los partidos deben comenzar puntualmente', seleccionada: false },
       { descripcion: 'Regla 10: Los árbitros tendrán la decisión final en todas las jugadas', seleccionada: false },
       { descripcion: 'Regla 11: Los equipos deben reportar cualquier lesión antes del partido', seleccionada: false },
       { descripcion: 'Regla 12: No se permiten bebidas alcohólicas en el área de juego', seleccionada: false },
       { descripcion: 'Regla 13: Los equipos tienen cinco minutos de descanso entre rondas', seleccionada: false },
       { descripcion: 'Regla 14: Cada jugador debe llevar su identificación personal', seleccionada: false },
       { descripcion: 'Regla 15: Está prohibido el uso de lenguaje ofensivo en el campo', seleccionada: false },
       { descripcion: 'Regla 16: Los equipos deben presentar su alineación antes de cada partido', seleccionada: false },
       { descripcion: 'Regla 17: Cualquier tipo de conducta antideportiva será sancionada', seleccionada: false },
       { descripcion: 'Regla 18: Los capitanes son responsables de la conducta de su equipo', seleccionada: false },
       { descripcion: 'Regla 19: El uso de joyas está prohibido durante el partido', seleccionada: false },
       { descripcion: 'Regla 20: Los equipos tienen derecho a dos protestas oficiales por torneo', seleccionada: false },
       { descripcion: 'Regla 21: Todos los jugadores deben usar calzado adecuado y seguro', seleccionada: false },
       { descripcion: 'Regla 22: Los jugadores deben firmar una declaración de responsabilida', seleccionada: false },
       { descripcion: 'Regla 23: Las decisiones de los árbitros son inapelable', seleccionada: false },
       { descripcion: 'Regla 24: Cada partido debe ser supervisado por al menos dos árbitro', seleccionada: false },
       { descripcion: 'Regla 25: Los equipos que lleguen tarde perderán el partido por defecto', seleccionada: false },
       { descripcion: 'Regla 26: Los resultados de cada partido serán publicados en el tablón', seleccionada: false },
       { descripcion: 'Regla 27: Las protestas deben realizarse dentro de los 30 minutos de finalizado el partido', seleccionada: false },
       { descripcion: 'Regla 28: No se permite la entrada al público en el área de juego', seleccionada: false },
       { descripcion: 'Regla 29: Los jugadores deben permanecer en la banca cuando no estén jugando', seleccionada: false },
       { descripcion: 'Regla 30: Todos los participantes deben respetar las normas de la competencia', seleccionada: false },
    ];
  reglasSeleccionadas: { descripcion: string; seleccionada: boolean }[] = [];
  // Método para agregar una regla
  agregarRegla() {
    if (this.descripcionRegla.trim() !== '') {
      this.reglas.push({ descripcion: this.descripcionRegla });
      this.descripcionRegla = '';
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Por favor, ingrese una descripción para la regla.';
    }
  }

  // Método para seleccionar una regla
  seleccionarRegla(regla: { descripcion: string }) {
    this.reglaSeleccionada = regla;
    this.descripcionRegla = regla.descripcion;
  }

  // Método para modificar una regla seleccionada
  modificarRegla() {
    if (this.reglaSeleccionada) {
      const index = this.reglas.indexOf(this.reglaSeleccionada);
      if (index !== -1) {
        this.reglas[index].descripcion = this.descripcionRegla;
        this.reglaSeleccionada = null;
        this.descripcionRegla = '';
        this.errorMessage = '';
      }
    } else {
      this.errorMessage = 'Seleccione una regla para modificar.';
    }
  }

  // Método para eliminar una regla seleccionada con confirmación
  eliminarRegla() {
    if (this.reglaSeleccionada) {
      const confirmacion = confirm("¿Estás seguro de que deseas eliminar esta regla?");
      if (confirmacion) {
        const index = this.reglas.indexOf(this.reglaSeleccionada);
        if (index !== -1) {
          this.reglas.splice(index, 1);
          this.reglaSeleccionada = null;
          this.descripcionRegla = '';
          this.errorMessage = '';
        }
      }
    } else {
      this.errorMessage = 'Seleccione una regla para eliminar.';
    }
  }
    mostrarReglas() {
    this.mostrarListaReglas = !this.mostrarListaReglas;
  }

  agregarReglasSeleccionadas() {
    this.reglasSeleccionadas = this.listaReglas.filter(regla => regla.seleccionada);
    this.mostrarListaReglas = false;  // Oculta la lista después de agregar las seleccionadas
  }
}
