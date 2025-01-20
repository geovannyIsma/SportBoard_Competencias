import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCompetenciasComponent } from './listado-competencias.component';

describe('ListadoCompetenciasComponent', () => {
  let component: ListadoCompetenciasComponent;
  let fixture: ComponentFixture<ListadoCompetenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoCompetenciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoCompetenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
