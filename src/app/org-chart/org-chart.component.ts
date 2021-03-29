import { Component, OnInit, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Edge, Node, Layout } from '@swimlane/ngx-graph';

import { DagreNodesOnlyLayout } from './customDagreNodesOnly';
import * as shape from 'd3-shape';

import { Employee, Empresa } from '../interfaces/entidades.interface';
import { EliminarComponent } from '../components/eliminar/eliminar.component';
import { AgregarComponent } from '../components/agregar/agregar.component';
import { EmpleadoService } from '../services/empleado.service';
import { EmpresaService } from '../services/empresa.service';
import { classEmpresa, classEmployee } from '../classes/entidades.classe';


@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.scss']
})
export class OrgChartComponent implements OnInit {

  empresas: Empresa[] = [];
  employees: Employee[] = [];

  public nodes: Node[] = [];
  public node: Node;
  public links: Edge[] = [];
  public layoutSettings = {
    orientation: 'TB'
  };
  public curve: any = shape.curveLinear;
  public layout: Layout = new DagreNodesOnlyLayout();

  constructor(public dialog: MatDialog,
              private empleadoService: EmpleadoService,
              private empresaService: EmpresaService) { 
  }

  ngOnInit(): void {
    this.empresaService.getEmpresas()
      .subscribe(empresas=> {
        this.empresas = empresas
        this.empleadoService.getEmpleados()
          .subscribe(empleados=> {
            this.employees = empleados, 
            this.dibujarDiagram();
          });
      });
  }

  dibujarDiagram(){
    this.nodes = [];
    this.links = [];
    for (const empresa of this.empresas) {
      const node: Node = {
        id: "empresa-"+empresa.id,
        label: empresa.name,
        data: {
          name: empresa.name,
          areas: empresa.areas,
          equipos: empresa.equipos,
          usuarios: empresa.usuarios,
          backgroundColor: empresa.backgroundColor,
          profile: empresa.profile,
          upperManagerId: empresa.upperManagerId
        }
      };

      this.nodes.push(node);
    }

    for (const empresa of this.empresas) {
      if (!empresa.upperManagerId) {
        continue;
      }

      const edge: Edge = {
        source: empresa.upperManagerId,
        target: "empresa-"+empresa.id
      };

      this.links.push(edge);
    }

    for (const employee of this.employees) {
      const node: Node = {
        id: "empleado-"+employee.id,
        label: employee.fullname,
        data: {
          tipo: employee.tipo,
          nombre: employee.nombre,
          fullname: employee.fullname,
          cargo: employee.cargo,
          backgroundColor: employee.backgroundColor,
          profile: employee.profile,
          upperManagerId: employee.upperManagerId
        }
      };

      this.nodes.push(node);
    }

    for (const employee of this.employees) {
      if (!employee.upperManagerId) {
        continue;
      }

      const edge: Edge = {
        source: employee.upperManagerId,
        target: "empleado-"+employee.id
      };

      this.links.push(edge);
    }

    [...this.nodes];
    [...this.links];
  }


  animarEliminacion(id: string) {
    return new Promise((resolve, reject)=>{
      const animarDelete = document.getElementById(`node${id}`);
      animarDelete.classList.add('containerAnim');
      setTimeout(() => {
        resolve('');
      }, 500);
    });
  }

  delete(data: Node){

    const dialogRef = this.dialog.open(EliminarComponent, {
      width: '250px',
      data: data
    });

    dialogRef.afterClosed()
      .subscribe( async(resp) => {
        if(!resp){
          return;
        }

        //Separamos el id del prefijo.
        const separaID = data.id.split('-');
        const id = separaID[separaID.length-1];
        await this.animarEliminacion(""+data.id);

        if(data.data.upperManagerId){
          if(data.data.areas){
            this.empresas = this.empresas.filter(empresa => {
              if(empresa.id !== Number(id)){
                return empresa;
              }else{
                this.eliminarEmpresa(empresa.id.toString());
              }
            });
            this.employees = this.employees.filter(employee => {
              if(employee.upperManagerId !== data.id){
                return employee;
              }else{
                this.eliminarEmpleado(employee.id.toString());
              }
            });
          }else if(data.data.tipo){
            this.employees = this.employees.filter(employee => {
              if(employee.id !== Number(id) && employee.upperManagerId !== data.id){
                return employee;
              }else{
                this.eliminarEmpleado(employee.id.toString());
              }
            });
          }else{
            this.employees = this.employees.filter(employee => {
              if(employee.id !== Number(id)){
                return employee;
              }else{
                this.eliminarEmpleado(employee.id.toString());
              }
            });
          }
        }else{
          console.log(this.empresas.length);
          this.empresas.forEach((empresa, index)=> {
            console.log(index);
            // this.eliminarEmpresa(empresa.id.toString());
            // if(index === this.empresas.length-1)this.empresas = [];
          });
          this.employees.forEach((empleado, index)=> {
            console.log(index);
            // this.eliminarEmpleado(empleado.id.toString());
            // if(index === this.employees.length-1)this.employees = [];
          })
        }
        this.dibujarDiagram();
      });

  }

  agregar(data: Node){
    const dialogRef = this.dialog.open(AgregarComponent, {
      width: '600px',
      data: data
    });

    dialogRef.afterClosed()
      .subscribe(resp => {
        if(!resp){
          return;
        }

        if(data.data.upperManagerId){
          // Puede ser una subempresa o un area o equipo
          // 1.- Si es una subempresa se debe agregar un area o equipo
          // 2.- Si es un area o equipo se debe agregar un colaborador o empleado
          if(data.data.tipo){
            // Es un área o equipo -> Agregamos un colaborador o empleado
            const empleado: classEmployee = new classEmployee(resp, data.id);
            this.guardarEmpleado(empleado);
          }else{
            // Es una subempresa -> Agregamos un área o equipo
            const empleado: classEmployee = new classEmployee(resp, data.id);
            this.guardarEmpleado(empleado);
          }
        }else{
          // Es la empresa padre -> Agregamos una subempresa
          const empresa: classEmpresa = new classEmpresa(resp.profile, resp.name, resp.areas, resp.equipos, resp.usuarios, data.id);
          this.guardarEmpresa(empresa);
        }

      });
  }

  guardarEmpresa(empresa: Empresa){
    this.empresaService.agregarEmpresa(empresa)
    .subscribe(empresa=> {
      this.empresas.push(empresa);
      this.dibujarDiagram();
    });
  }

  guardarEmpleado(empleado: Employee){
    this.empleadoService.agregarEmpleado(empleado)
      .subscribe(empleado=> {
        this.employees.push(empleado);
        this.dibujarDiagram();
      });
  }

  eliminarEmpleado(id: string){
    this.empleadoService.eliminarEmpleado(id)
      .subscribe(resp => console.log('Eliminado con éxito'));
  }

  eliminarEmpresa(id: string){
    this.empresaService.eliminarEmpresa(id)
      .subscribe(resp => console.log('Eliminado con éxito'));
  }

}
