import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditingUserComponent } from './editing-user/editing-user.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path: "edit/:id", component: EditingUserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
