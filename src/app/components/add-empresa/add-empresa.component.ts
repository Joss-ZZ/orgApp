import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empresa } from '../../interfaces/entidades.interface';
import { Node } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-add-empresa',
  templateUrl: './add-empresa.component.html',
  styleUrls: ['./add-empresa.component.scss']
})
export class AddEmpresaComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    profile: ['', [Validators.required]],
    areas: ['', [Validators.required]],
    equipos: ['', [Validators.required]],
    usuarios: ['', [Validators.required]]
  });

  @Input() data: Node;
  @Output() onActionClick: EventEmitter<undefined | Empresa> = new EventEmitter();

  empresa: Empresa = {
    name: '',
    profile: '',
    areas: '',
    equipos: '',
    usuarios: ''
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  cerrar(){
    this.onActionClick.emit();
  }

  agregar(){
    this.empresa = this.miFormulario.value;
    this.onActionClick.emit(this.empresa);
  }

}
