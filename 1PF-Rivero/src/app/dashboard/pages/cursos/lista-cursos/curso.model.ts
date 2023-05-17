import { Alumno } from "../../alumnos/lista-alumnos/lista-alumno.model";

export class Curso {
  constructor(
    public id: number,
    public nombre: String,
    public duracion: String,
    public fechaInicio: String,
    public fechaFin: String,
    public alumno: Alumno
  ) {}
}
