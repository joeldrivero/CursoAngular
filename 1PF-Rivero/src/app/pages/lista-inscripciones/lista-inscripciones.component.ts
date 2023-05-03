import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { AbmInscripcionComponent } from '../abm-inscripcion/abm-inscripcion.component';
import { Inscripcion } from './inscripcion.model';
import { Alumno } from '../lista-alumnos/lista-alumno.model';
import { AlumnosService } from 'src/app/core/services/alumnos.service';
import { CursosService } from 'src/app/core/services/cursos.service';
import { Curso } from '../lista-cursos/curso.model';
import { InscripcionService } from '../../core/services/inscripcion.service';

@Component({
  selector: 'app-lista-inscripciones',
  templateUrl: './lista-inscripciones.component.html',
  styleUrls: ['./lista-inscripciones.component.css'],
})
export class ListaInscripcionesComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['alumno', 'curso', 'actions'];
  cursosDataSource = new MatTableDataSource<Curso>([]);
  alumnosDataSource = new MatTableDataSource<Alumno>([]);
  inscripcionDataSource = new MatTableDataSource<Inscripcion>([]);
  inscripcionSubscription: Subscription = new Subscription();

  constructor(
    private cursosService: CursosService,
    private alumnosService: AlumnosService,
    private InscripcionService: InscripcionService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.obtenerCursos();
    this.obtenerAlumnos();
    this.InscripcionService.getInscripciones().subscribe((inscripcion) => {
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
        this.inscripcionDataSource.data = [
          ...this.inscripcionDataSource.data,
          valor,
        ];
      }
    });
  }

  eliminarElemento(row: any): void {
    this.inscripcionDataSource.data = this.inscripcionDataSource.data.filter(
      (r) => r !== row
    );
  }

  editarElemento(row: any): void {
    const dialogRef = this.matDialog.open(AbmInscripcionComponent, {
      data: {
        alumnos: this.alumnosDataSource.data,
        inscripcion: row,
        cursos: this.cursosDataSource.data,
      },
    });
    dialogRef.afterClosed().subscribe((valor) => {
      if (valor) {
        const index = this.inscripcionDataSource.data.indexOf(row);
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
