import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaInformacionComponent } from './reserva-informacion.component';

describe('ReservaInformacionComponent', () => {
  let component: ReservaInformacionComponent;
  let fixture: ComponentFixture<ReservaInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaInformacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
