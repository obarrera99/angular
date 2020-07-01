
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router } from '@angular/router';

@Component({
  selector: 'app-agrega-empleados',
  templateUrl: './agrega-empleados.component.html',
  styleUrls: ['./agrega-empleados.component.css']
})
export class AgregaEmpleadosComponent implements OnInit {

  public errors;
  public estado : String;
  public mensaje = "Usuario agregado";
  public url = 'http://localhost:8071/createData';

  constructor(private http: HttpClient, private router: Router) {}

  createEmployee(postData: {  id: string; nombre: string, paterno: string, materno: string, correo: string, estado: String, cargo: String }) {
   this.estado = postData.estado;
    var content = ({
        "id": postData.id,
        "data":{
            "nombre":postData.nombre,
            "apellidoPat":postData.paterno,
            "apellidoMat":postData.materno,
            "email": postData.correo,
            "cargo": postData.cargo,
            "estado": postData.estado 
          }
    })
    console.log(content);
    this.http.post(this.url, content, { headers: new HttpHeaders( {'content-Type': 'application/json'} )})
    .subscribe(
      result => {
       console.log(result);
     },
     error => {
       if(error.status != 200){
       alert(this.errors + `: Hubo un error al agregar el usuario. Intente más tarde.`)
       }
       else{
         alert("Usuario agregado");
       }
     });
  }

  ngOnInit() {}  
}
