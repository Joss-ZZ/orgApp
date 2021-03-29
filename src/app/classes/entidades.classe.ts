import { Employee, Empresa } from '../interfaces/entidades.interface';

export class classEmployee implements Employee{

    backgroundColor: string;
    tipo;
    nombre;
    profile;
    fullname;
    cargo;
    // public tipo?: string, public nombre?: string, public profile?: string, public fullname?: string, public cargo?: string, public upperManagerId?: string
    constructor(empleado: Employee, public upperManagerId: string){
        if(empleado.tipo){
            this.tipo = empleado.tipo;
            this.nombre = empleado.nombre;
            this.profile = empleado.profile;
            this.fullname = empleado.fullname;
            this.cargo = empleado.cargo;
        }else{
            this.profile = empleado.profile;
            this.fullname = empleado.fullname;
            this.cargo = empleado.cargo;
        }
        this.asignarColor();
    }

    asignarColor(){
        if(this.cargo === 'Lider'){
            if(this.tipo ==="Equipo"){
                this.backgroundColor = "#E67E22";
            }else{
                this.backgroundColor = "#C71585";
            }
        }else if(this.cargo === 'Colaborador'){
            this.backgroundColor = "#8A2BE2";
        }else if(this.cargo === 'Empleado'){
            this.backgroundColor = "#28B463";
        }
    }

}

export class classEmpresa implements Empresa{

    backgroundColor: string;

    constructor(public profile: string, public name: string, public areas: string, public equipos: string, public usuarios: string, public upperManagerId: string){
        this.backgroundColor = "#DC143C";
    }

}

