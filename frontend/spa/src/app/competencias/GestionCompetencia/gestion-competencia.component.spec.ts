import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { GestionCompetenciaComponent } from './gestion-competencia.component';

import { Component } from '@angular/core';

@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  styleUrls: ['./competencias.component.css']
})
export class CompetenciasComponent {
  nombre: string = '';
  fechaInicio: Date | null = null;
  fechaFin: Date | null = null;
  competencias: { nombre: string; fechaInicio: Date; fechaFin: Date }[] = [];
  displayedColumns: string[] = ['nombre', 'fechaInicio', 'fechaFin'];
  errorMessage: string = '';

  guardar() {
    if (this.nombre && this.fechaInicio && this.fechaFin) {
      this.competencias.push({
        nombre: this.nombre,
        fechaInicio: this.fechaInicio,
        fechaFin: this.fechaFin
      });

      // Limpiar campos después de guardar
      this.nombre = '';
      this.fechaInicio = null;
      this.fechaFin = null;
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Por favor, complete todos los campos.';
    }
  }

  cancelar() {
    this.nombre = '';
    this.fechaInicio = null;
    this.fechaFin = null;
    this.errorMessage = '';
  }
}

describe('GestionCompetenciaComponent', () => {
  let component: GestionCompetenciaComponent;
  let fixture: ComponentFixture<GestionCompetenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionCompetenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionCompetenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
