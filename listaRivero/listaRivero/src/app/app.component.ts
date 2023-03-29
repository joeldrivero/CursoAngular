import { Component } from '@angular/core';
import { Alumno } from './models/alumno.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listaAlumnos: Alumno[] = [
    new Alumno('Ana', 'García', 20, 'ana.garcia@example.com', 7),
    new Alumno('Carlos', 'Pérez', 19, 'carlos.perez@example.com', 5),
    new Alumno('María', 'Hernández', 22, 'maria.hernandez@example.com', 9),
    new Alumno('Pedro', 'González', 21, 'pedro.gonzalez@example.com', 8),
    new Alumno('Sara', 'Fernández', 20, 'sara.fernandez@example.com', 6),
    new Alumno('Marcelo', 'Diaz', 20, 'marcelo.diaz@example.com', 6),
    new Alumno('Joel', 'Rivero', 20, 'joel.rivero@example.com', 2),
    new Alumno('Gonzalo', 'Fernández', 20, 'gonzalo.fernandez@example.com', 2),
  ];
}