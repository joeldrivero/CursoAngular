import { Alumno } from "../lista-alumnos/lista-alumno.model";
import { Curso } from "../lista-cursos/curso.model";

export class Inscripcion {
    constructor(
      public id: number,
      public alumno: Alumno,
      public curso: Curso,
      public fecha: string,
    ) {}
  }
  