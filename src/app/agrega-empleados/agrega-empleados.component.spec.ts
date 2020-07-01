import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaEmpleadosComponent } from './agrega-empleados.component';

describe('AgregaEmpleadosComponent', () => {
  let component: AgregaEmpleadosComponent;
  let fixture: ComponentFixture<AgregaEmpleadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregaEmpleadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
