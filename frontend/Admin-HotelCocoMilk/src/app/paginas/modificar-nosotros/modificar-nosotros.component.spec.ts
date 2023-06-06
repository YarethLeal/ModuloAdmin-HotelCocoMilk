import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarNosotrosComponent } from './modificar-nosotros.component';

describe('ModificarNosotrosComponent', () => {
  let component: ModificarNosotrosComponent;
  let fixture: ComponentFixture<ModificarNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarNosotrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
