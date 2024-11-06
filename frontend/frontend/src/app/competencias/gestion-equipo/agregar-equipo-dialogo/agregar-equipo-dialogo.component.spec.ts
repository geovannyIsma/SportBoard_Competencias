import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEquipoDialogoComponent } from './agregar-equipo-dialogo.component';

describe('AgregarEquipoDialogoComponent', () => {
  let component: AgregarEquipoDialogoComponent;
  let fixture: ComponentFixture<AgregarEquipoDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarEquipoDialogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEquipoDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
