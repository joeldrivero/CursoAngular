import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Curso } from 'src/app/pages/lista-cursos/curso.model';
import { Inscripcion } from 'src/app/pages/lista-inscripciones/inscripcion.model';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private inscripciones: Inscripcion[] = [];
  private cursos: Curso[] = [
    {
      id: 1,
      nombre: 'Programación en Angular',
      duracion: '6 semanas',
      fechaInicio: '2022-06-01',
      fechaFin: '2022-07-15',
    },
    {
      id: 2,
      nombre: 'Desarrollo de aplicaciones móviles',
      duracion: '8 semanas',
      fechaInicio: '2022-07-01',
      fechaFin: '2022-08-30',
    },
  ];

  obtenerCursos(): Observable<Curso[]> {
    return of(this.cursos);
  }

  agregarCurso(curso: Curso): Observable<void> {
    this.cursos.push(curso);
    return of(undefined);
  }
  obtenerInscripcionesPorCurso(idCurso: number): Observable<Inscripcion[]> {
    return of(this.inscripciones.filter((i) => i.curso.id === idCurso));
  }

  editarCurso(curso: Curso): Observable<void> {
    const index = this.cursos.findIndex((c) => c.id === curso.id);
    if (index >= 0) {
      this.cursos[index] = curso;
    }
    return of(undefined);
  }

  eliminarCurso(curso: Curso): Observable<void> {
    const index = this.cursos.findIndex((c) => c.id === curso.id);
    if (index >= 0) {
      this.cursos.splice(index, 1);
    }
    return of(undefined);
  }
}
