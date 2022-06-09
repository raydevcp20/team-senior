import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditingUserComponent } from './home/editing-user/editing-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: 'home',
    loadChildren: () => import('./home/home-routing.module').then(m => m.HomeRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
