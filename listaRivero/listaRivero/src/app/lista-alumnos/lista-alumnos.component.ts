import { Component, Input } from '@angular/core';
import { Alumno } from '../models/alumno.model';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css'],
})
export class ListaAlumnosComponent {
  @Input()
  listaAlumnos!: Alumno[];
}
