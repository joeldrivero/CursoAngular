import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from '../lista-cursos/curso.model';
import { Alumno } from '../../alumnos/lista-alumnos/lista-alumno.model';
import { Inscripcion } from '../../inscripcion/inscripcion.model';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrls: ['./detalle-curso.component.css'],
})
export class DetalleCursoComponent {
  constructor(
    public dialogRef: MatDialogRef<DetalleCursoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { curso: Curso; alumno: Alumno[] }
  ) {}
}
