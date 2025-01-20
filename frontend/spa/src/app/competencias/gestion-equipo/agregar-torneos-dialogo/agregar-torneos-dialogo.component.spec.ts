import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTorneosDialogoComponent } from './agregar-torneos-dialogo.component';

describe('AgregarTorneosDialogoComponent', () => {
  let component: AgregarTorneosDialogoComponent;
  let fixture: ComponentFixture<AgregarTorneosDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarTorneosDialogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarTorneosDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
