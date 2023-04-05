import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent {
  personaForm: FormGroup;

  nombreControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  apellidoControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);

  constructor() {
    this.personaForm = new FormGroup({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      email: this.emailControl,
    });
  }

  onSubmit(): void {
    if (this.personaForm.valid) console.log(this.personaForm.value);
  }
}
