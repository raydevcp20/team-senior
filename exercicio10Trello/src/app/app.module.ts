import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ExercicioUmComponent } from './exercicio-um/exercicio-um.component';
import { ExercicioDoisComponent } from './exercicio-dois/exercicio-dois.component';
import { ExercicioDezComponent } from './exercicio-dez/exercicio-dez.component';
import { UppercaseSeniorPipe } from './pipes/uppercase-senior.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExercicioUmComponent,
    ExercicioDoisComponent,
    ExercicioDezComponent,
    UppercaseSeniorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
