import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbmInscripcionComponent } from './abm-inscripcion/abm-inscripcion.component';
import { InscripcionComponent } from './inscripcion.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AbmInscripcionComponent,
    InscripcionComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule,
    MatCardModule,
    MatSelectModule,
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
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: InscripcionComponent
      }
    ])
  ]
})
export class InscripcionModule {}
