import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEmpleadosComponent } from './editar-empleados.component';

describe('EditarEmpleadosComponent', () => {
  let component: EditarEmpleadosComponent;
  let fixture: ComponentFixture<EditarEmpleadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarEmpleadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
