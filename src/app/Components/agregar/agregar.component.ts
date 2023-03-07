import { Component, Output, Input } from '@angular/core';
import { Empleado } from 'src/app/Models/empleado.model';
import { DataServiceService } from 'src/app/Service/data-service.service';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  nombre:string;
  apellido:string;
  cargo:string;
  sueldo!:number;
  
  constructor(private dataService:DataServiceService){
    this.nombre="";
    this.apellido="";
    this.cargo="";
    
  }

  addEmp(){
    this.dataService.addEmpleado(new Empleado(this.nombre,this.apellido,this.cargo,this.sueldo));
  }
}
