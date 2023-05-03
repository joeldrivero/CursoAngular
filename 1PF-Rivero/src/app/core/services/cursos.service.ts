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
}
