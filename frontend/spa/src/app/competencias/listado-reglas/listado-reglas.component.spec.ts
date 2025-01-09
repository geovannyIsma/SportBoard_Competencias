import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoReglasComponent } from './listado-reglas.component';

describe('ListadoReglasComponent', () => {
  let component: ListadoReglasComponent;
  let fixture: ComponentFixture<ListadoReglasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoReglasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoReglasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
