import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Aula01Component } from './aula01/aula01.component';
import { LowerCaseSeniorPipe } from './pipes/lower-case-senior.pipe';
import { CpfSeniorPipe } from './pipes/cpf-senior.pipe';
import { Aula02Component } from './aula02/aula02.component';
import { FormsModule } from '@angular/forms';
import { Aula03Component } from './aula03/aula03.component';
import { Aula04Component } from './aula04/aula04.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Aula01Component,
    LowerCaseSeniorPipe,
    CpfSeniorPipe,
    Aula02Component,
    Aula03Component,
    Aula04Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
