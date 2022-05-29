import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CompraFinalizadaComponent } from './compra-finalizada/compra-finalizada.component';
import { CardProductComponent } from './card-product/card-product.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    CompraFinalizadaComponent,
    CardProductComponent
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    FormsModule
  ]
})
export class RoutesModule { }
