import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHabitacionComponent } from './admin-habitacion.component';

describe('AdminHabitacionComponent', () => {
  let component: AdminHabitacionComponent;
  let fixture: ComponentFixture<AdminHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHabitacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
