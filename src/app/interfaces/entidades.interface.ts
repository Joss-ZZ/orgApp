export interface Empresa {
    id?: number;
    profile?: string;
    name?: string;
    areas?: string;
    equipos?: string;
    usuarios?: string;
    backgroundColor?: string;
    upperManagerId?: string;
}


export interface Employee {
    id?: number;
    //Puede ser un Área o Equipo
    tipo?: string;
    //nombre del área o equipo
    nombre?: string;
    //Cantidad de empleados
    cantEmp?: string;
    profile?: string;
    fullname?: string;
    cargo?: string;
    backgroundColor?: string;
    upperManagerId?: string;
}
  