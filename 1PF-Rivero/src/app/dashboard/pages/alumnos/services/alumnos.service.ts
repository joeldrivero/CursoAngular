import { Injectable } from '@angular/core';
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

  agregarAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(this.url, alumno);
  }

  eliminarAlumno(alumno: Alumno): Observable<void> {
    const url = this.url + '/' + alumno.id;
    return this.http.delete<void>(url);
  }

  editAlumno(oldAlumno: Alumno, newAlumno: Alumno): Observable<Alumno> {
    const url = this.url + '/' + oldAlumno.id;
    return this.http.put<Alumno>(url, newAlumno);
  }
}
