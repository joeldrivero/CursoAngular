import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { RegisterComponent } from './register/register.component';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  declarations: [LoginComponent, AuthComponent, RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PipesModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
})
export class AuthModule {}
