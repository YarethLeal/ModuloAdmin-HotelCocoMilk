import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPublicidadComponent } from './modificar-publicidad.component';

describe('ModificarPublicidadComponent', () => {
  let component: ModificarPublicidadComponent;
  let fixture: ComponentFixture<ModificarPublicidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarPublicidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarPublicidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
