import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDisciplinaComponent } from './card-disciplina.component';

describe('CardDisciplinaComponent', () => {
  let component: CardDisciplinaComponent;
  let fixture: ComponentFixture<CardDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDisciplinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
