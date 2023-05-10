import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ModuloMaterialModule } from '../shared/modulo-material/modulo-material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { PageWrapperComponent } from './pages/page-wrapper/page-wrapper.component';
import { DirectivesModule } from '../shared/directives/directives.module';
import { PipesModule } from '../shared/pipes/pipes.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ToolbarComponent,
    SidebarComponent,
    PageWrapperComponent,
  ],
  imports: [
    ModuloMaterialModule,
    SharedModule,
    PipesModule,
    DirectivesModule,
    RouterModule,
    MatToolbarModule,
    RouterModule.forChild([
      {
        path: 'alumnos',
        loadChildren: () =>
          import('./pages/alumnos/alumnos.module').then((m) => m.AlumnosModule),
      },
      {
        path: 'cursos',
        loadChildren: () =>
          import('./pages/cursos/cursos.module').then((m) => m.CursosModule),
      },
      {
        path: 'inscripciones',
        loadChildren: () =>
          import('./pages/inscripcion/inscripcion.module').then((m) => m.InscripcionModule),
      },
    ]),
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
