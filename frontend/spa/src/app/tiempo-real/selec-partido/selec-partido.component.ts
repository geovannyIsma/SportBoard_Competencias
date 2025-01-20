import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CronologiaComponent } from '../cronologia/cronologia.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';

@Component({
    selector: 'app-selec-partido',
    imports: [CommonModule, MatDividerModule, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatCardModule, MatIconModule, MatTableModule],
    templateUrl: './selec-partido.component.html',
    styleUrl: './selec-partido.component.scss'
})
export class SelecPartidoComponent {
  currentDate = new Date();
  esArbitro = true;

  constructor(private router: Router) { 
  }
  navigateToCronologia() {
    this.router.navigate(['/tiempo-real/cronologia']); 
  }

  navigateToArbitro() {
    this.router.navigate(['/tiempo-real/arbitro']); 
  }
  

    displayedColumns: string[] = ['equipos', 'marcador', 'tiempo', 'estado', 'accion'];
    dataSource = [
      { equipos: 'Quinto - Sexto', marcador: '0 - 1', tiempo: 1, estado: 'En juego' },
      { equipos: 'Equipo B', marcador: '0 - 0', tiempo: 2, estado: 'Suspendido' },
    ];
  }
