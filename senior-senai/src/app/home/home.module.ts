import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { DetalhamentoComponent } from './detalhamento/detalhamento.component';
import { RouterModule } from '@angular/router';
import { AdmComponent } from './adm/adm.component';


@NgModule({
  declarations: [
    HomeComponent,
    SigninComponent,
    SignupComponent,
    LoginComponent,
    CadastroComponent,
    DetalhamentoComponent,
    AdmComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    RouterModule
  ]
})
export class HomeModule { }
