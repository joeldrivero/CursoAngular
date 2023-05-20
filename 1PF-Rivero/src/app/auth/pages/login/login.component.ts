import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService, LoginFormValue } from '../auth.service';
import { RegisterComponent } from '../register/register.component';
import { MatDialog } from '@angular/material/dialog';
import { RegisterService } from '../register/register.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  emailControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required]);
  loginForm = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
  });

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.authService.login(this.loginForm.value as LoginFormValue);
    }
  }

  abrirABMRegister(): void {
    const dialog = this.matDialog.open(RegisterComponent);
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        this.registerService.agregarUsuario(valor).subscribe(
          () => {
            console.log(valor);
          },
          (error) => {
            console.log('Error al agregar usuario:', error);
          }
        );
      }
    });
  }
}
