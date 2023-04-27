import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoHotelComponent } from './estado-hotel.component';

describe('EstadoHotelComponent', () => {
  let component: EstadoHotelComponent;
  let fixture: ComponentFixture<EstadoHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
