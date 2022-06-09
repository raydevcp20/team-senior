import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EditingUserComponent } from './editing-user/editing-user.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
      EditingUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class HomeModule { }
