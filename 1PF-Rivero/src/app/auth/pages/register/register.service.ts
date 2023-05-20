import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/core/models/usuario.model';


import { enviroment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  readonly url = `${enviroment.apiBaseUrl}/usuarios`;

  usuarios: Usuario[] = [];

  constructor(private http: HttpClient) {}

  generateRandomToken(length: number): string {
    const characters = 'BNZXJNOANSVCDNASOosdnvodnsaovda';
    let token = '';
    const charactersLength = characters.length;
  
    for (let i = 0; i < length; i++) {
      token += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    return token;
  }

  

  agregarUsuario(usuarios: Usuario): Observable<Usuario> {
    console.log(usuarios)
    usuarios.token = this.generateRandomToken(12);
    usuarios.role = 'user'
    return this.http.post<Usuario>(this.url, usuarios);
  }

  
}
