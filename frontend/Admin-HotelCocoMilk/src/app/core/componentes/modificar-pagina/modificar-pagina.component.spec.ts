import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPaginaComponent } from './modificar-pagina.component';

describe('ModificarPaginaComponent', () => {
  let component: ModificarPaginaComponent;
  let fixture: ComponentFixture<ModificarPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarPaginaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
