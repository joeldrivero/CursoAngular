import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { AbmCursosComponent } from './abm-cursos/abm-cursos.component';
import { CursosComponent } from './cursos.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { NombreCompletoPipe } from 'src/app/shared/pipes/nombre-completo.pipe';
import { DetalleCursoComponent } from './detalle-curso/detalle-curso.component';



@NgModule({
  declarations: [
    CursosComponent,
    AbmCursosComponent,
    ListaCursosComponent,
    DetalleCursoComponent
  ],
  imports: [
    PipesModule,
    DirectivesModule,
    SharedModule,
    PipesModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListaCursosComponent
      }
    ])
  ]
})
export class CursosModule { }
