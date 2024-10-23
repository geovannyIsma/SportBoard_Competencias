import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { GestionCompetenciaComponent } from './gestion-competencia.component';

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
