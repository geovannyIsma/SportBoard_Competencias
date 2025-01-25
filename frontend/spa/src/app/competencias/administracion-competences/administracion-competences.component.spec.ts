import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionCompetencesComponent } from './administracion-competences.component';

describe('AdministracionCompetencesComponent', () => {
  let component: AdministracionCompetencesComponent;
  let fixture: ComponentFixture<AdministracionCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministracionCompetencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministracionCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
