import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Usuario } from '../core/models/usuario.model';
import { AuthService } from '../auth/pages/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnDestroy {
  showFiller = false;
  authUser$: Observable<Usuario | null>;

  destroyed$ = new Subject<void>();

  constructor(
    private authService: AuthService,
  ) {

    this.authUser$ = this.authService.obtenerUsuarioAutenticado()

  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  logout(): void {
    this.authService.logout();
  }
}