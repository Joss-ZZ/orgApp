import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Node } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AgregarComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Node) { }
              
  ngOnInit(): void {
  }

  accion(event){
    if(event === undefined){
      this.dialogRef.close();
    }
    this.dialogRef.close(event);
  }

}
