import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonaComponent } from './persona/persona.component';
import { FormErrorHelperComponent } from './shared/components/form-error-helper/form-error-helper.component';
import { PersonaModule } from './persona/persona.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PersonaModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
