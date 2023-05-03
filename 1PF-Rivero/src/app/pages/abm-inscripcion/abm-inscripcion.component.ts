import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from '../lista-alumnos/lista-alumno.model';
import { Curso } from '../lista-cursos/curso.model';
import { AlumnosService } from 'src/app/core/services/alumnos.service';
import { CursosService } from 'src/app/core/services/cursos.service';


@Component({
  selector: 'app-abm-inscripcion',
  templateUrl: './abm-inscripcion.component.html',
  styleUrls: ['./abm-inscripcion.component.css'],
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
    console.log(this.inscripcionForm.value)
    this.dialogRef.close(this.inscripcionForm.value);
  }
}
