import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Node } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.scss']
})
export class EliminarComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EliminarComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Node) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  borrar(){
    this.dialogRef.close(true);
  }

  cerrar(){
    this.dialogRef.close();
  }

}
