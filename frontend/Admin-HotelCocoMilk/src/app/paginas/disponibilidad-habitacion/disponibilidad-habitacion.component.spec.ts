import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisponibilidadHabitacionComponent } from './disponibilidad-habitacion.component';

describe('DisponibilidadHabitacionComponent', () => {
  let component: DisponibilidadHabitacionComponent;
  let fixture: ComponentFixture<DisponibilidadHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisponibilidadHabitacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisponibilidadHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
