import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from '../../alumnos/lista-alumnos/lista-alumno.model';
import { AlumnosService } from '../../alumnos/services/alumnos.service';
import { Curso } from '../../cursos/lista-cursos/curso.model';
import { CursosService } from '../../cursos/services/cursos.service';

@Component({
  selector: 'app-abm-inscripcion',
  templateUrl: './abm-inscripcion.component.html',
  styleUrls: ['./abm-inscripcion.component.css']
})
export class AbmInscripcionComponent {
  cursosDataSource = new MatTableDataSource<Curso>([]);
  alumnosDataSource = new MatTableDataSource<Alumno>([]);


  constructor(
    private dialogRef: MatDialogRef<AbmInscripcionComponent>,
    private cursosService: CursosService,
    private alumnosService: AlumnosService
  ) {
  }

  ngOnInit(): void {
    this.cursosService.obtenerCursos().subscribe((cursos) => {
      this.cursosDataSource = new MatTableDataSource(cursos);
    });

    this.alumnosService.obtenerAlumnos().subscribe((alumnos) => {
      this.alumnosDataSource = new MatTableDataSource(alumnos);
    });
  }

  alumnoControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  cursoControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  fechaControl = new FormControl('', [Validators.required]);

  inscripcionForm = new FormGroup({
    alumno: this.alumnoControl,
    curso: this.cursoControl,
    fecha: this.fechaControl,
  });

  onSubmit() {
    this.dialogRef.close(this.inscripcionForm.value);
  }
}
