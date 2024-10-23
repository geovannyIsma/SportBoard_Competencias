import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidosProximosComponent } from './partidos-proximos.component';

describe('PartidosProximosComponent', () => {
  let component: PartidosProximosComponent;
  let fixture: ComponentFixture<PartidosProximosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartidosProximosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidosProximosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
