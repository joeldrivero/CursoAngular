import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.css'],
})
export class AbmAlumnosComponent {

  nombreControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  apellidoControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);

  edadControl = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
  ]);

  cursoControl = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
  ]);

  fechaNacimientoControl = new FormControl('', [Validators.required]);
  alumnoForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    email: this.emailControl,
    edad:this.edadControl,
    curso: this.cursoControl,});

  constructor(private dialogRef: MatDialogRef<AbmAlumnosComponent>) { }
  

  onSubmit() {

    this.dialogRef.close(this.alumnoForm.value);
  }
}
