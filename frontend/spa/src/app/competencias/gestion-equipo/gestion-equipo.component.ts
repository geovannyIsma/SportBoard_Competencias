import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AgregarEquipoDialogoComponent } from './agregar-equipo-dialogo/agregar-equipo-dialogo.component';
import { AgregarTorneosDialogoComponent } from './agregar-torneos-dialogo/agregar-torneos-dialogo.component';

@Component({
    selector: 'app-gestion-equipo',
    imports: [
        CommonModule,
        MatCardModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
    ],
    templateUrl: './gestion-equipo.component.html',
    styleUrls: ['./gestion-equipo.component.scss']
})
export class GestionEquipoComponent {
  equipos: { 
    nombre: string; 
    fechaFundacion: Date; 
    pais: string; 
    correoElectronico: string; 
    telefono: string; 
    torneos?: string[];  // Agregar la propiedad "torneos"
  }[] = [];

  displayedColumns: string[] = ['nombre', 'fechaFundacion', 'pais', 'correoElectronico', 'telefono', 'torneos', 'acciones'];
  
  constructor(private dialog: MatDialog) {}

  abrirDialogo(): void {
    const dialogRef = this.dialog.open(AgregarEquipoDialogoComponent, {
      width: '620px', 
      height: '600px', 
      maxWidth: '90vw', 
      maxHeight: '90vh',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.equipos.push(result); 
      }
    });
  }

  abrirDialogoTorneos(): void {
    const dialogRef = this.dialog.open(AgregarTorneosDialogoComponent, {
      width: '620px', 
      height: '600px', 
      maxWidth: '90vw', 
      maxHeight: '90vh',
    });

    dialogRef.afterClosed().subscribe((torneosSeleccionados: { name: string; fecha: string }[]) => {
      if (torneosSeleccionados && this.equipos.length > 0) {
        this.equipos[this.equipos.length - 1].torneos = torneosSeleccionados.map((t) => t.name || t.fecha);
      }
    });
  }
}
