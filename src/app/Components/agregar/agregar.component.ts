import { Component,ViewChild, ElementRef } from '@angular/core';
import { MinLengthValidator, NgForm, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Empleado } from 'src/app/Models/empleado.model';
import { DataServiceService } from 'src/app/Service/data-service.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  @ViewChild('abrirMod') mod!:ElementRef;
  @ViewChild('agregarEmp') form!: NgForm;
  
  nombre!:string;
  apellido!:string;
  cargo!:string;
  sueldo!:number;
  advertencia:boolean;
  mensaje:string;
  verificar:boolean;
  numeroControl: FormControl = new FormControl('');
  
  constructor(private dataService:DataServiceService){
    this.nombre='';
    this.apellido='';
    this.cargo='';
    this.sueldo=0;
    this.advertencia=false;
    this.mensaje="";
    this.verificar=false;
  }
  validadores(){
    let nom=this.form.controls['nombre'];
    let ape=this.form.controls['apellido'];
    let car=this.form.controls['cargo'];
    // let num=this.form.controls['sueldo'];
    nom.setValidators([Validators.required, Validators.minLength(5)]);
    nom.updateValueAndValidity();
    ape.setValidators([Validators.required, Validators.minLength(5)]);
    ape.updateValueAndValidity();
    car.setValidators([Validators.required, Validators.minLength(5)]);
    car.updateValueAndValidity();
    // num.setValidators([Validators.required, this.maxDigitsValidator(7)])
    // num.updateValueAndValidity();
  }
  addEmp(){
    this.validadores();
    if(this.form.valid){
      console.log('formulario valido');
      this.advertencia=!this.dataService.addEmpleado(new Empleado(this.nombre,this.apellido,this.cargo,this.sueldo))
      if(this.advertencia){
        this.mensaje="Solo se permite añadir un maximo de 5 empleados." 
        this.abrirModal();
      }
      this.verificar=false;
    }else{
      this.verificar=true;
    }
    
  }
  verificarSiCamposValidos(campo: string): boolean{
    const control= this.form?.controls[campo];
    let valid;
    if(this.verificar){
      valid= control?.invalid;
    }else{
      valid= control? (control?.invalid && control?.touched ): false;
    }
    return valid;
  }
  maxDigitsValidator(event: any) {
    const num=event.target.value;
    if(num > 7){
      event.target.value=+num.toString().substring(0,7);
    }
    if( num<0 || isNaN(num) || Math.floor(num)==0){
      event.target.value=0;
    }
  }
  abrirModal(){
    // let btnModal= document.getElementById('abrirModal');
    // // btnModal?.click();
    // this.renderer.selectRootElement(this.mod.nativeElement).click();
    this.mod.nativeElement.click();
    
  }

}
