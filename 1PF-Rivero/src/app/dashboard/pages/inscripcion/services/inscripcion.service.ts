import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { enviroment } from 'src/environments/environments';
import { Curso } from '../../cursos/lista-cursos/curso.model';
import { Alumno } from '../../alumnos/lista-alumnos/lista-alumno.model';

@Injectable({
  providedIn: 'root',
})
export class InscripcionService {
  readonly url = `${enviroment.apiBaseUrl}/cursos`;
  constructor(private http: HttpClient) {}

  crearInscripcion(curso: Curso): Observable<any> {
    const url = this.url + '/' + curso.id;
    console.log('cursito:', curso);
    return this.http.put<any>(url, curso);
  }

  getInscripcionesPorCurso(cursoid: number): Observable<any> {
    const url = this.url + '/' + cursoid;
    return this.http.get<any>(url);
  }
}
