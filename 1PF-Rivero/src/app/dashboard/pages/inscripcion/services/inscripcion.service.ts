import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { enviroment } from 'src/environments/environments';
import { Curso } from '../../cursos/lista-cursos/curso.model';
import { Alumno } from '../../alumnos/lista-alumnos/lista-alumno.model';
import { Inscripcion } from '../inscripcion.model';

@Injectable({
  providedIn: 'root',
})
export class InscripcionService {
  readonly url = `${enviroment.apiBaseUrl}/inscripciones`;
  constructor(private http: HttpClient) {}

  crearInscripcion(curso: Curso): Observable<any> {
    return this.http.post<any>(this.url, curso);
  }

  getInscripcionesPorCurso(cursoid: number): Observable<any> {
    const url = this.url + '/?curso.id=' + cursoid;
    return this.http.get<any>(url);
  }

  getInscripciones(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  eliminarInscripcion(inscripcion: Inscripcion): Observable<void> {
    const url = this.url + '/' + inscripcion.id;
    return this.http.delete<void>(url);
  }

  editarInscripcion(
    oldInscripcion: Inscripcion,
    newInscripcion: Inscripcion
  ): Observable<Inscripcion> {
    const url = this.url + '/' + oldInscripcion.id;
    console.log(url)
    console.log(newInscripcion)
    return this.http.put<Inscripcion>(url, newInscripcion);
  }
}
