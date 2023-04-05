import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorHelperModule } from '../shared/components/form-error-helper/form-error-helper.module';
import { PersonaComponent } from './persona.component';

@NgModule({
  declarations: [PersonaComponent],
  imports: [CommonModule, ReactiveFormsModule, FormErrorHelperModule],
  exports: [PersonaComponent],
})
export class PersonaModule {}
