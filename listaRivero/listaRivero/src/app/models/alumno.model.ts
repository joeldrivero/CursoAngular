export class Alumno {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public email: string,
    public notaFinal: number
  ) {}

  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
