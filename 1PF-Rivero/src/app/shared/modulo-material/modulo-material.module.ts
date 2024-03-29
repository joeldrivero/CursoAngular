import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  exports: [
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class ModuloMaterialModule {}
