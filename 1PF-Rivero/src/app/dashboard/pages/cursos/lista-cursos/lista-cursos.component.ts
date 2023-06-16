import { Component } from '@angular/core';
import { Curso } from './curso.model';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription, map } from 'rxjs';
import { CursosService } from 'src/app/dashboard/pages/cursos/services/cursos.service';
import { MatDialog } from '@angular/material/dialog';
import { AbmCursosComponent } from '../abm-cursos/abm-cursos.component';
import { DetalleCursoComponent } from '../detalle-curso/detalle-curso.component';
import { InscripcionService } from '../../inscripcion/services/inscripcion.service';
import { AbmInscripcionComponent } from '../../inscripcion/abm-inscripcion/abm-inscripcion.component';
import { Inscripcion } from '../../inscripcion/inscripcion.model';
import { Alumno } from '../../alumnos/lista-alumnos/lista-alumno.model';
import { AuthService } from 'src/app/auth/pages/auth.service';

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
  alumnosService: any;
  esAdmin = false;

  constructor(
    private matDialog: MatDialog,
    private cursosService: CursosService,
    private inscripcionService: InscripcionService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.cursoSubscription = this.cursosService
      .obtenerCursos()
      .subscribe((cursos) => {
        this.dataSource.data = cursos;
      });

    this.authService.obtenerUsuarioAutenticado().subscribe((usuario) => {
      if (usuario && usuario.role === 'admin') {
        this.esAdmin = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.cursoSubscription.unsubscribe();
  }

  verInscripciones(curso: Curso): void {
    this.inscripcionService
      .getInscripcionesPorCurso(curso.id)
      .subscribe((inscripcion: Inscripcion) => {
        const alumnos = inscripcion.map((inscripcion) => inscripcion.alumno);
        this.matDialog.open(DetalleCursoComponent, {
          data: { curso, alumno: alumnos },
          width: '600px',
        });
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

  abrirABMInscripcion(): void {
    const dialog = this.matDialog.open(AbmInscripcionComponent);
    dialog.afterClosed().subscribe((valor) => {
      this.inscripcionService.crearInscripcion(valor.curso).subscribe(
        () => {
          console.log(valor);
          this.ngOnInit();
        },
        (error) => {
          console.log('Error al procesar la inscripcion:', error);
        }
      );
      console.log(valor);
      /* const inscripcion = 
      console.log(valor.curso) */
    });
  }
}
