import { Component } from '@angular/core';
import { Curso } from './curso.model';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { CursosService } from 'src/app/dashboard/pages/cursos/services/cursos.service';
import { MatDialog } from '@angular/material/dialog';
import { AbmCursosComponent } from '../abm-cursos/abm-cursos.component';
import { ListaInscripcionesComponent } from '../../inscripcion/lista-inscripciones/lista-inscripciones.component';
import { DetalleCursoComponent } from '../detalle-curso/detalle-curso.component';
import { Inscripcion } from '../../inscripcion/lista-inscripciones/inscripcion.model';
import { InscripcionService } from '../../inscripcion/services/inscripcion.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css'],
})
export class ListaCursosComponent {
  displayedColumns: string[] = [
    'id',
    'nombre',
    'duracion',
    'fechaInicio',
    'fechaFin',
    'actions',
  ];
  dataSource = new MatTableDataSource<Curso>([]);
  cursoSubscription: Subscription = new Subscription();
  inscripciones: Inscripcion[] = [];
  alumnosService: any;
  constructor(
    private matDialog: MatDialog,
    private cursosService: CursosService,
    private inscripcionService: InscripcionService
  ) {}

  ngOnInit(): void {
    this.cursoSubscription = this.cursosService
      .obtenerCursos()
      .subscribe((cursos) => {
        this.dataSource.data = cursos;
      });
  }

  ngOnDestroy(): void {
    this.cursoSubscription.unsubscribe();
  }

  verInscripciones(curso: Curso): void {
    this.inscripcionService
      .getInscripcionesPorCurso(curso.id)
      .subscribe((inscripciones: Inscripcion[]) => {
        const alumnos = inscripciones.map((inscripcion) => inscripcion.alumno);
        this.matDialog.open(DetalleCursoComponent, {
          data: { curso, alumnos, inscripciones },
          width: '600px',
        });
      });
  }

  mostrarNombresAlumnos(nombres: string[]) {
    this.matDialog.open(ListaInscripcionesComponent, {
      width: '400px',
      data: { nombres: nombres },
    });
  }

  abrirABMCursos(): void {
    const dialog = this.matDialog.open(AbmCursosComponent);
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        this.cursosService.agregarCurso(valor).subscribe(
          () => {
            console.log(valor);
            this.ngOnInit();
          },
          (error) => {
            console.log('Error al agregar curso:', error);
          }
        );
      }
    });
  }
}
