import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of } from 'rxjs';
import { Alumno } from 'src/app/pages/lista-alumnos/lista-alumno.model';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  alumnos: Alumno[] = [
    {
      nombre: 'Juan',
      apellido: 'Perez',
      email: 'juan@example.com',
      edad: 25
    },
    {
      nombre: 'María',
      apellido: 'Perez',
      email: 'maria@example.com',
      edad: 28
    },
    {
      nombre: 'Pedro',
      apellido: 'Perez',
      email: 'pedro@example.com',
      edad: 30
    },
  ];

  constructor() {}

  obtenerAlumnos(): Observable<Alumno[]> {
    return of(this.alumnos);
  }

  agregarAlumno(alumno: Alumno): void {
    this.alumnos.push(alumno);
  }

  eliminarAlumno(alumno: Alumno): Observable<void> {
    const index = this.alumnos.indexOf(alumno);
    if (index > -1) {
      this.alumnos.splice(index, 1);
    }
    return of(undefined);
  }
  

  editAlumno(oldAlumno: Alumno, newAlumno: Alumno): void {
    const index = this.alumnos.indexOf(oldAlumno);
    if (index > -1) {
      this.alumnos[index] = newAlumno;
    }
  }
}
