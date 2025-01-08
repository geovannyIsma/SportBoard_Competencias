import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-agregar-torneos-dialogo',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
  ],
  templateUrl: './agregar-torneos-dialogo.component.html',
  styleUrl: './agregar-torneos-dialogo.component.scss'
})
export class AgregarTorneosDialogoComponent {
  torneos = [
    { name: 'Copa Libertadores', fecha: '2021-12-08' },
    { name: 'Premier League', fecha: '2021-12-08' },
    { name: 'Liga Santander', fecha: '2021-12-08' },
    { name: 'Serie A', fecha: '2021-12-08' },	
    { name: 'Copa de Liga' , fecha: '2021-12-08' },
    { name: 'Super Copa Europa', fecha: '2021-12-08' },
    { name: 'Champions League', fecha: '2021-12-08' },
    { name: 'Mundial de Clubes', fecha: '2021-12-08' },
  ];

  torneosSeleccionados: any[] = [];

  constructor(public dialogRef: MatDialogRef<AgregarTorneosDialogoComponent>) {}

  toggleTorneo(torneo: any) {
    if (this.torneosSeleccionados.includes(torneo)) {
      this.torneosSeleccionados = this.torneosSeleccionados.filter(t => t !== torneo);
    } else {
      this.torneosSeleccionados.push(torneo);
    }
  }

  confirmarSeleccion() {
    this.dialogRef.close(this.torneosSeleccionados);
  }

}
