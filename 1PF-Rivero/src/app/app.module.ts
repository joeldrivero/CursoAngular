import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AbmAlumnosComponent } from './pages/abm-alumnos/abm-alumnos.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { PageWrapperComponent } from './pages/page-wrapper/page-wrapper.component';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { ListaAlumnosComponent } from './pages/lista-alumnos/lista-alumnos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuloMaterialModule } from './modulo-material/modulo-material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { AbmInscripcionComponent } from './pages/abm-inscripcion/abm-inscripcion.component';
import { AbmCursosComponent } from './pages/abm-cursos/abm-cursos.component';
import { ListaCursosComponent } from './pages/lista-cursos/lista-cursos.component';
import { ListaInscripcionesComponent } from './pages/lista-inscripciones/lista-inscripciones.component';
import { DetalleCursoComponent } from './pages/detalle-curso/detalle-curso.component';


@NgModule({
  declarations: [
    AppComponent,
    AbmAlumnosComponent,
    SidebarComponent,
    PageWrapperComponent,
    ToolbarComponent,
    ListaAlumnosComponent,
    AbmInscripcionComponent,
    AbmCursosComponent,
    ListaCursosComponent,
    ListaInscripcionesComponent,
    DetalleCursoComponent
  ],
  imports: [SharedModule,
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    ModuloMaterialModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'alumnos', component: AppComponent },
      { path: 'inscripcion', component: AppComponent },
      { path: 'cursos',component: AppComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
