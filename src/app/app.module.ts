import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {HttpClientModule} from '@angular/common/http';

import { NgxGraphModule } from '@swimlane/ngx-graph';

import { AppComponent } from './app.component';
import { OrgChartComponent } from './org-chart/org-chart.component';

import { EliminarComponent } from './components/eliminar/eliminar.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { AddEmpresaComponent } from './components/add-empresa/add-empresa.component';
import { AddEmpleadoComponent } from './components/add-empleado/add-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    OrgChartComponent,
    EliminarComponent,
    AgregarComponent,
    AddEmpresaComponent,
    AddEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    NgxGraphModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
