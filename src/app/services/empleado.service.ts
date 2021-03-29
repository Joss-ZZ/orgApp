import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/entidades.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getEmpleados():Observable<Employee[]> {
    const url: string = `${this.baseUrl}/empleados`;
    return this.http.get<Employee[]>(url);
  }

  agregarEmpleado(empleado: Employee): Observable<Employee> {
    const url: string = `${this.baseUrl}/empleados`;
    return this.http.post<Employee>(url, empleado);
  }
  
  eliminarEmpleado(id: string): Observable<Employee>{
    const url: string = `${this.baseUrl}/empleados`;
    return this.http.delete<Employee>(`${url}/${id}`);
  }

}
