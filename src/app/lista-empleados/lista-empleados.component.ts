
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  public tempResult: any = [];
  public tabla = true;
  public datos: any = [];
  public errors: any;
  public url =  "http://localhost:8071";
  filterPost = '';

  constructor( private http: HttpClient, public router: Router,)  { 
    this.http.get(this.url+'/readAllData').subscribe( result =>{
      this.tempResult = result;
      this.datos = result;  
      if(this.datos.length == 0){
        this.tabla = false;
      }
    })
   }

   filterEmployee(){
     switch(this.filterPost){
       case "Contratado":
         this.datos = this.tempResult;
         let contratados = this.datos;
         let contratadosFiltro = contratados.filter( temp=> temp.data.estado == "Contratado")
         this.datos = contratadosFiltro;
         break;
         case "Outsourcing":
           this.datos = this.tempResult;
           let outsourcing = this.datos;
           let outsourcingFiltro = outsourcing.filter( temp=> temp.data.estado == "Outsourcing")
           this.datos = outsourcingFiltro;
          break;
          default:
            this.datos = this.tempResult;
     }
  }

   deleteEmployee(id: string){
     this.http.delete(this.url+'/deleteData',  { params: { id } })
     .subscribe(
       result => {
        console.log(result);
      },
      error => {
        if(error.status != 200){
        alert(this.errors + `: Hubo un error al borrar el usuario. Intente más tarde.`)
        }
        else{
          alert("Usuario eliminado");
          window.location.reload();
        }
      });
   }
    
   editEmployee(id: String){
      this.router.navigate(['/Editar'], { queryParams: { id: id } } );
    }

  ngOnInit(): void {}

}
