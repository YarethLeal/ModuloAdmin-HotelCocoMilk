import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerHabitacionComponent } from './ver-habitacion.component';

describe('VerHabitacionComponent', () => {
  let component: VerHabitacionComponent;
  let fixture: ComponentFixture<VerHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerHabitacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
