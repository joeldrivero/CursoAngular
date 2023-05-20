import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Usuario } from 'src/app/core/models/usuario.model';
import { AuthService } from '../../../auth/pages/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  authUser$: Observable<Usuario | null>;

  constructor(private authService: AuthService) {
    this.authUser$ = this.authService.obtenerUsuarioAutenticado();
  }

  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(
      () => observer.next(new Date().toLocaleTimeString().toString()),
      1000
    );
  });
}
