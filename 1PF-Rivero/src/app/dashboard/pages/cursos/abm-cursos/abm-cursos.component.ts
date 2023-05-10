import { Component, OnInit } from '@angular/core';
import { Curso } from '../lista-cursos/curso.model';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-abm-cursos',
  templateUrl: './abm-cursos.component.html',
  styleUrls: ['./abm-cursos.component.css'],
})
export class AbmCursosComponent {
  nombreControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  duracionControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  fechaInicioControl = new FormControl('', [Validators.required]);
  fechaFinControl = new FormControl('', [Validators.required]);

  cursoForm = new FormGroup({
    nombre: this.nombreControl,
    duracion: this.duracionControl,
    fechaInicio: this.fechaInicioControl,
    fechaFin: this.fechaFinControl,
  });

  constructor(private dialogRef: MatDialogRef<AbmCursosComponent>) {}

  onSubmit() {
    this.dialogRef.close(this.cursoForm.value);
  }
}
