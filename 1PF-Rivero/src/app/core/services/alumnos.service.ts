import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of } from 'rxjs';
import { Alumno } from 'src/app/dashboard/pages/alumnos/lista-alumnos/lista-alumno.model';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  readonly url = `${enviroment.apiBaseUrl}/alumnos`;

  alumnos: Alumno[] = [];

  constructor(private http: HttpClient) {}

  obtenerAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.url);
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
