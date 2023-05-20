import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RegisterService } from './register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  nombreControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  apellidoControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);

  passwordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
  ]);

  registerForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    email: this.emailControl,
    passwordControl: this.passwordControl,
  });
  AlumnoService: any;

  constructor(
    private dialogRef: MatDialogRef<RegisterComponent>,
    private registerService: RegisterService
  ) {}

  onSubmit() {
    console.log(this.registerForm.value);
    this.dialogRef.close(this.registerForm.value);
  }
}
