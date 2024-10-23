import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasEquiposComponent } from './estadisticas-equipos.component';

describe('EstadisticasEquiposComponent', () => {
  let component: EstadisticasEquiposComponent;
  let fixture: ComponentFixture<EstadisticasEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadisticasEquiposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadisticasEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
