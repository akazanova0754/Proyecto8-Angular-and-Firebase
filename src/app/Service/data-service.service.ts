import { Injectable} from '@angular/core';
import { Empleado } from '../Models/empleado.model';


import {AngularFireDatabase, AngularFireObject} from '@angular/fire/compat/database';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService{

  // path de la base de datos
  private dbpath:string;

  // Variables para conecxion con FireBase
  obs: Observable<any>;
  fireobs:AngularFireObject<Empleado>;

  // Variables para compartir entre los componentes que se suscriban al servicio
  empleados:Empleado[]=[];

  // Observador para compartir data entre los componentes
  private enviarMensajeSubject= new BehaviorSubject<Empleado[]>(this.empleados);
  enviarMensajeObservable= this.enviarMensajeSubject.asObservable();

  constructor(private firestore:AngularFireDatabase) {
    this.dbpath='data';
    this.fireobs=firestore.object(this.dbpath);
    this.obs = this.fireobs.valueChanges();
  }
  
  getEmpleados(){
    this.obs.subscribe(data =>{
      if(data!=null)
        this.empleados=data;
      this.enviarMensajeSubject.next(this.empleados);
    }
    );
  }
  getEmpleadoById(id:number){
    return this.firestore.object(this.dbpath+'/'+id).valueChanges();
  }
  addEmpleado(emp:Empleado){
    console.log(emp);
    if(this.empleados.length < 5){
      this.empleados.push(emp);
      console.log(this.empleados);
      this.firestore.object(this.dbpath).set(this.empleados);
      return true
    }else{
      return false;
    }
  }
  updateEmpleado(empleado:Empleado,id:number){
    this.firestore.object(this.dbpath+'/'+id).update(empleado);
  }
  deleteEmpleado(id:number){
    console.log(this.empleados);
    this.empleados.splice(id,1);
    this.firestore.object(this.dbpath).set(this.empleados);

  }
}
