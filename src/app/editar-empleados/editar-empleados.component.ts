import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-editar-empleados',
  templateUrl: './editar-empleados.component.html',
  styleUrls: ['./editar-empleados.component.css']
})
export class EditarEmpleadosComponent implements OnInit {
  
  public id: string
  public errors: any;
  usuario: any;
  str: string

  formulario = {
    id: "",
    nombre: "",
    apellidoPat: "",
    apellidoMat: "",
    email: "",
    cargo: "",
    estado: "", 
  }

  constructor( private http: HttpClient, private route: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
    });
  }

  editEmployee(){
    var url = 'http://localhost:8071/updateData/'
    var content = ({
      "id": this.formulario.id,
      "data":{
          "nombre":this.formulario.nombre,
          "apellidoPat":this.formulario.apellidoPat,
          "apellidoMat":this.formulario.apellidoMat,
          "email": this.formulario.email,
          "cargo": this.formulario.cargo, 
          "estado": this.formulario.estado
    }
})
    this.http.put(url, content, { headers: new HttpHeaders({'content-Type': 'application/json',})})
    .subscribe(
      result => {
       console.log(result);
     },
     error => {
       if(error.status != 200){
       alert(this.errors + `: Hubo un error al borrar el usuario. Intente más tarde.`)
       }
       else{
         alert("Usuario actualizado");
       }
     });
  }

  ngOnInit() {
    const id = this.id;
    const url = `http://localhost:8071/readData/`;
    const paramId = new HttpParams().set('id', id );
    this.http.get( url, { params: paramId } )
    .subscribe( resultado =>{
      this.usuario = resultado;
      //console.log(this.usuario);
      this.formulario.id = this.usuario.id;
      this.formulario.nombre = this.usuario.data.nombre;
      this.formulario.apellidoPat = this.usuario.data.apellidoPat;
      this.formulario.apellidoMat = this.usuario.data.apellidoMat;
      this.formulario.email = this.usuario.data.email;
      this.formulario.cargo = this.usuario.data.cargo;
      this.formulario.estado = this.usuario.data.estado;
    })
  }
}