import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCompetenciaComponent } from './card-competencia.component';

describe('CardCompetenciaComponent', () => {
  let component: CardCompetenciaComponent;
  let fixture: ComponentFixture<CardCompetenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCompetenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCompetenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
