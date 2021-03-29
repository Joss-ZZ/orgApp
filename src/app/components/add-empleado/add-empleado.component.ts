import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../interfaces/entidades.interface';
import { Node } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.scss']
})
export class AddEmpleadoComponent implements OnInit {

  miFormulario2: FormGroup = this.fb.group({
    tipo: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    cantEmp: ['', [Validators.required]],
    cargo: ['Lider', [Validators.required]],
    fullname: ['', [Validators.required]],
    profile: ['', [Validators.required]]
  });
  
  miFormulario: FormGroup = this.fb.group({
    cargo: ['', [Validators.required]],
    fullname: ['', [Validators.required]],
    profile: ['', [Validators.required]]
  });

  @Input() data: Node;
  @Output() onActionClick: EventEmitter<undefined | Employee> = new EventEmitter();

  empleado: Employee = {
    fullname: '',
    profile: '',
    cargo: ''
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  cerrar(){
    this.onActionClick.emit();
  }

  agregar(form: string){
    if(form === 'form2'){
      this.empleado = this.miFormulario2.value;
    }else{
      this.empleado = this.miFormulario.value;
    }
    this.onActionClick.emit(this.empleado);
  }

}
