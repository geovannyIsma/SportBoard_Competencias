import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReglasComponent } from './card-reglas.component';

describe('CardReglasComponent', () => {
  let component: CardReglasComponent;
  let fixture: ComponentFixture<CardReglasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardReglasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReglasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
