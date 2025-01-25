import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCompetenciasComponent } from './home-competencias.component';

describe('HomeCompetenciasComponent', () => {
  let component: HomeCompetenciasComponent;
  let fixture: ComponentFixture<HomeCompetenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCompetenciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCompetenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
