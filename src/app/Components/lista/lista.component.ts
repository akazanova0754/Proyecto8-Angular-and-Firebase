import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';
import { Empleado } from 'src/app/Models/empleado.model';
import { DataServiceService } from 'src/app/Service/data-service.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{
  empleados:Empleado[]=[];

  constructor(private dataService:DataServiceService){
    this.getEmp();
  }

  ngOnInit(): void {
    
    this.dataService.enviarMensajeObservable.subscribe((emp)=>{ 
      console.log(emp);
      this.empleados=emp;
      console.log(this.empleados);
    });
  }
  getEmp(){
    this.dataService.getEmpleados();
  }
  eliminar(id:number){
    this.dataService.deleteEmpleado(id);
  }

}
