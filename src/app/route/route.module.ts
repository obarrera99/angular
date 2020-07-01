import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes, Router } from '@angular/router';
import { ListaEmpleadosComponent } from '../lista-empleados/lista-empleados.component';
import { AgregaEmpleadosComponent } from '../agrega-empleados/agrega-empleados.component';
import { EditarEmpleadosComponent } from '../editar-empleados/editar-empleados.component';

const routes: Routes = [
  { path: 'Empleados', component: ListaEmpleadosComponent },
  { path: 'AgregarEmepleados', component: AgregaEmpleadosComponent },
  { path: 'Editar', component: EditarEmpleadosComponent }
] 


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ], 
  exports: [
    RouterModule
  ]
})
export class RouteModule { }
