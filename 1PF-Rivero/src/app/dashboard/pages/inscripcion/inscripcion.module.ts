import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbmInscripcionComponent } from './abm-inscripcion/abm-inscripcion.component';
import { ListaInscripcionesComponent } from './lista-inscripciones/lista-inscripciones.component';
import { InscripcionComponent } from './inscripcion.component';



@NgModule({
  declarations: [
    AbmInscripcionComponent,
    ListaInscripcionesComponent,
    InscripcionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InscripcionModule { }
