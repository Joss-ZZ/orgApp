import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../interfaces/entidades.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getEmpresas():Observable<Empresa[]> {
    const url: string = `${this.baseUrl}/empresas`;
    return this.http.get<Empresa[]>(url);
  }

  agregarEmpresa(empresa: Empresa): Observable<Empresa> {
    const url: string = `${this.baseUrl}/empresas`;
    return this.http.post<Empresa>(url, empresa);
  }

  eliminarEmpresa(id: string): Observable<Empresa>{
    const url: string = `${this.baseUrl}/empresas`;
    return this.http.delete<Empresa>(`${url}/${id}`);
  }

}
