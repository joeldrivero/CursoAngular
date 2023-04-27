import { Component, OnInit } from '@angular/core';
import { Alumno } from './lista-alumno.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AbmAlumnosComponent } from '../abm-alumnos/abm-alumnos.component';
import { AlumnosService } from '../../core/services/alumnos.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css'],
})
export class ListaAlumnosComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'email', 'edad', 'curso', 'actions'];
  dataSource = new MatTableDataSource<Alumno>([]);

  constructor(
    private matDialog: MatDialog,
    private alumnosService: AlumnosService
  ) {}

  ngOnInit(): void {
    this.alumnosService.obtenerAlumnos().subscribe((alumnos) => {
      this.dataSource.data = alumnos;
    });
  }


  abrirABMAlumnos(): void {
    const dialog = this.matDialog.open(AbmAlumnosComponent);
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        this.dataSource.data = [...this.dataSource.data, valor];
      }
    });
  }

  eliminarElemento(alumno: Alumno): void {
    this.alumnosService.eliminarAlumno(alumno).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(a => a !== alumno);
    });
  }

  editarElemento(alumno: Alumno): void {
    const dialogRef = this.matDialog.open(AbmAlumnosComponent);
    dialogRef.afterClosed().subscribe((valor) => {
      if (valor) {
        const index = this.dataSource.data.indexOf(alumno);
        if (index > -1) {
          this.dataSource.data[index] = valor;
          this.dataSource = new MatTableDataSource<Alumno>(
            this.dataSource.data
          );
        }
      }
    });
  }
}
