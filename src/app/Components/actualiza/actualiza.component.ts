import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { count } from 'rxjs';
import { Empleado } from 'src/app/Models/empleado.model';
import { DataServiceService } from 'src/app/Service/data-service.service';

@Component({
  selector: 'app-actualiza',
  templateUrl: './actualiza.component.html',
  styleUrls: ['./actualiza.component.css']
  // ,template:"<h1>Hola</h1>"
})
export class ActualizaComponent implements OnInit{
  id:number;
  empleado:Empleado|null=null;

  nombre:string='';
  apellido:string='';
  cargo:string='';
  sueldo:number=0;

  constructor(private route:ActivatedRoute, private serviceData:DataServiceService){
    this.id=route.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.serviceData.getEmpleadoById(this.id).subscribe( (item) => 
      {
        this.empleado=Object(item);
        if(Object.entries(Object(this.empleado)).length == (Object.entries(new Empleado('','','',0)).length - 1)){
          this.nombre=this.empleado!.nombre;
          this.apellido=this.empleado!.apellido;
          this.cargo=this.empleado!.cargo;
          this.sueldo=this.empleado!.sueldo;
        }else{
          this.nombre='';
          this.apellido='';
          this.cargo='';
          this.sueldo=0;
        }

      }
    );
  }
  actualizar(){
    if(this.empleado!=null){
      if(Object.entries(this.empleado).length == (Object.entries(new Empleado('','','',0)).length - 1)){
        this.serviceData.updateEmpleado(new Empleado(this.nombre,this.apellido,this.cargo,this.sueldo) , this.id);
      }
    }
  }
}
