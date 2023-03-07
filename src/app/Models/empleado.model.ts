export class Empleado {
    nombre:string;
    apellido:string;
    cargo:string;
    sueldo:number;
    listaCaracteristicas:string[];
    
    constructor(nombre:string,apellido:string,cargo:string,sueldo:number){
        this.nombre=nombre;
        this.apellido=apellido;
        this.cargo=cargo;
        this.sueldo=sueldo;
        this.listaCaracteristicas=[];
    }
}
