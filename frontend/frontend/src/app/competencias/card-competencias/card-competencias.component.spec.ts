import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCompetenciasComponent } from './card-competencias.component';

describe('CardCompetenciasComponent', () => {
  let component: CardCompetenciasComponent;
  let fixture: ComponentFixture<CardCompetenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCompetenciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCompetenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
