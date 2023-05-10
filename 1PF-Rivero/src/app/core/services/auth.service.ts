import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, catchError, of, BehaviorSubject } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { enviroment } from 'src/environments/environments';

export interface LoginFormValue {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUser$: Usuario | null = null;

  constructor(private router: Router, private httpClient: HttpClient) {}

  obtenerUsuarioAutenticado(): Observable<Usuario | null> {
    return of(this.authUser$);
  }

  establecerUsuarioAutenticado(usuario: Usuario, token: string): void {
    this.authUser$ = { ...usuario, token };
  }

  login(formValue: LoginFormValue): void {

    this.httpClient
      .get<Usuario[]>(`${enviroment.apiBaseUrl}/usuarios?email=${formValue.email}&password=${formValue.password}`/* ,{ 
        params: {
          ...formValue,
        },
      } */)
      .subscribe({
        next: (usuarios) => {
          const usuarioAutenticado = usuarios[0];
          if (usuarioAutenticado) {
            localStorage.setItem('token', usuarioAutenticado.token);
            this.establecerUsuarioAutenticado(
              usuarioAutenticado,
              usuarioAutenticado.token
            );
            this.router.navigate(['dashboard/alumnos']);
          } else {
            alert('¡Usuario y contraseña incorrectos!');
          }
        },
      });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.authUser$ = null;
    this.router.navigate(['auth']);
  }

  verificarToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    return this.httpClient
      .get<Usuario[]>(`${enviroment.apiBaseUrl}/usuarios?token=${token}`, {
        headers: new HttpHeaders({
          Authorization: token || '',
        }),
      })
      .pipe(
        map((usuarios) => {
          const usuarioAutenticado = usuarios[0];
          if (usuarioAutenticado) {
            localStorage.setItem('token', usuarioAutenticado.token);
            this.establecerUsuarioAutenticado(
              usuarioAutenticado,
              usuarioAutenticado.token
            );
          }
          return !!usuarioAutenticado;
        }),
        catchError((err) => {
          return of(false);
        })
      );
  }
}
