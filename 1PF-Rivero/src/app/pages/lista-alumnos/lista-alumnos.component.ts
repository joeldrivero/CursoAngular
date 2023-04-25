import { Component } from '@angular/core';
import { Alumno } from './lista-alumno.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AbmAlumnosComponent } from '../abm-alumnos/abm-alumnos.component';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css'],
})
export class ListaAlumnosComponent {
  Alumnos: Alumno[] = [];

  displayedColumns: string[] = ['nombre', 'email', 'edad', 'curso',"actions"];
  dataSource = new MatTableDataSource(this.Alumnos);

  constructor(private matDialog: MatDialog) {}

  abrirABMAlumnos(): void {
    const dialog = this.matDialog.open(AbmAlumnosComponent);
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        this.dataSource.data = [...this.dataSource.data, valor];
      }
    });
  }
  eliminarElemento(alumno: Alumno): void {
    const index = this.dataSource.data.indexOf(alumno);
    if (index > -1) {
      this.dataSource.data.splice(index, 1);
      this.dataSource = new MatTableDataSource<Alumno>(this.dataSource.data);
    }
  }

  editarElemento(alumno: Alumno): void {
  const dialogRef = this.matDialog.open(AbmAlumnosComponent);

  dialogRef.afterClosed().subscribe((valor) => {
    if (valor) {
      const index = this.dataSource.data.indexOf(alumno);
      if (index > -1) {
        this.dataSource.data[index] = valor;
        this.dataSource = new MatTableDataSource<Alumno>(this.dataSource.data);
      }
    }
  });
}
}
