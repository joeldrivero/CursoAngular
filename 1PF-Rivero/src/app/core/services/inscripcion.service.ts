import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Inscripcion } from 'src/app/pages/lista-inscripciones/inscripcion.model';

@Injectable({
  providedIn: 'root',
})
export class InscripcionService {
  private inscripciones: Inscripcion[] = [
    {
      id: 1,
      alumno: {
        nombre: 'Juan',
        apellido: 'Pérez',
        edad: 20,
        email: 'juanperez@gmail.com',
      },
      curso: {
        id: 1,
        nombre: 'Programación en Angular',
        duracion: '6 semanas',
        fechaInicio: '2022-06-01',
        fechaFin: '2022-07-15',
      },
      fecha: '2022-02-15',
    },
  ];

  constructor() {}

  getInscripciones(): Observable<Inscripcion[]> {
    return of(this.inscripciones);
  }

  getInscripcionesPorCurso(cursoId: number): Observable<Inscripcion[]> {
    return of(
      this.inscripciones.filter(
        (inscripcion) => inscripcion.curso.id === cursoId
      )
    );
  }

  agregarInscripcion(inscripcion: Inscripcion): void {
    this.inscripciones.push(inscripcion);
  }

  actualizarInscripcion(inscripcion: Inscripcion): void {
    const index = this.inscripciones.findIndex((i) => i.id === inscripcion.id);
    this.inscripciones[index] = inscripcion;
  }

  eliminarInscripcion(id: number): void {
    this.inscripciones = this.inscripciones.filter((i) => i.id !== id);
  }
}
