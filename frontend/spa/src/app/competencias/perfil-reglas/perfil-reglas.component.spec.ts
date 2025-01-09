import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilReglasComponent } from './perfil-reglas.component';

describe('PerfilReglasComponent', () => {
  let component: PerfilReglasComponent;
  let fixture: ComponentFixture<PerfilReglasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilReglasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilReglasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
