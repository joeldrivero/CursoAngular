import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Alumno } from '../alumnos/lista-alumnos/lista-alumno.model';
import { AlumnosService } from '../alumnos/services/alumnos.service';
import { Curso } from '../cursos/lista-cursos/curso.model';
import { CursosService } from '../cursos/services/cursos.service';
import { AbmInscripcionComponent } from './abm-inscripcion/abm-inscripcion.component';
import { InscripcionService } from './services/inscripcion.service';
import { Inscripcion } from './inscripcion.model';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css'],
})
export class InscripcionComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['alumno', 'curso', 'actions'];
  cursosDataSource = new MatTableDataSource<Curso>([]);
  alumnosDataSource = new MatTableDataSource<Alumno>([]);
  inscripcionDataSource = new MatTableDataSource<Inscripcion>([]);
  inscripcionSubscription: Subscription = new Subscription();

  constructor(
    private cursosService: CursosService,
    private alumnosService: AlumnosService,
    private inscripcionService: InscripcionService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.obtenerCursos();
    this.obtenerAlumnos();
    this.inscripcionService.getInscripciones().subscribe((inscripcion) => {
      this.inscripcionDataSource.data = inscripcion;
    });
  }

  ngOnDestroy(): void {
    this.inscripcionSubscription.unsubscribe();
  }

  obtenerCursos(): void {
    this.cursosService.obtenerCursos().subscribe((cursos) => {
      this.cursosDataSource.data = cursos;
    });
  }

  obtenerAlumnos(): void {
    this.alumnosService.obtenerAlumnos().subscribe((alumnos) => {
      this.alumnosDataSource.data = alumnos;
    });
  }

  abrirABMInscripcion(): void {
    const dialog = this.matDialog.open(AbmInscripcionComponent, {
      data: { alumnos: this.alumnosDataSource.data },
    });
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        this.inscripcionService.crearInscripcion(valor).subscribe(
          () => {
            console.log(valor);
            this.ngOnInit()
          },
          (error) => {
            console.log('Error al agregar inscripcion:', error);
          }
        );
      }
    });
  }

  eliminarElemento(inscripcion: any): void {
    this.inscripcionService.eliminarInscripcion(inscripcion).subscribe(() => {
      this.inscripcionDataSource.data = this.inscripcionDataSource.data.filter((a) => a !== inscripcion);
    });
  }

  editarElemento(inscripcion: Inscripcion): void {
    const dialogRef = this.matDialog.open(AbmInscripcionComponent, {
      data: {
        alumnos: this.alumnosDataSource.data,
        inscripcion: inscripcion,
        cursos: this.cursosDataSource.data,
      },
    });
    dialogRef.afterClosed().subscribe((valor) => {
      if (valor) {
        console.log("ACA")
        this.inscripcionService.editarInscripcion(inscripcion, valor);
        const index = this.inscripcionDataSource.data.indexOf(inscripcion);
        if (index > -1) {
          this.inscripcionDataSource.data[index] = valor;
          this.inscripcionDataSource = new MatTableDataSource<any>(
            this.inscripcionDataSource.data
          );
        }
      }
    });
  }
}
