import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Curso } from 'src/app/dashboard/pages/cursos/lista-cursos/curso.model';

import { enviroment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class CursosService {

  readonly url = `${enviroment.apiBaseUrl}/cursos`;
  private cursos: Curso[] = [];
  constructor(private http: HttpClient) {}

  obtenerCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.url);
  }

  agregarCurso(curso: Curso): Observable<Curso[]> {
    return this.http.post<Curso[]>(this.url, curso);
  }
}
