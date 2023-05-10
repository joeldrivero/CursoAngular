import { Alumno } from "../../alumnos/lista-alumnos/lista-alumno.model";
import { Curso } from "../../cursos/lista-cursos/curso.model";


export class Inscripcion {
    constructor(
      public id: number,
      public alumno: Alumno,
      public curso: Curso,
      public fecha: string,
    ) {}
  }
  