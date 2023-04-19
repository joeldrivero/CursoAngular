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
import { NombreCompletoPipe } from './nombre-completo.pipe';
import { FontSizeDirective } from './font-size.directive';


@NgModule({
  declarations: [
    AppComponent,
    AbmAlumnosComponent,
    SidebarComponent,
    PageWrapperComponent,
    ToolbarComponent,
    ListaAlumnosComponent,
    NombreCompletoPipe,
    FontSizeDirective,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    ModuloMaterialModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
