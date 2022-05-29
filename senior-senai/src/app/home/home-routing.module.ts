import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AdmComponent } from './adm/adm.component';
import { DetalhamentoComponent } from './detalhamento/detalhamento.component';
import { HomeComponent } from './home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'signin', 
    component: SigninComponent,
    canDeactivate: [AuthGuard]
  },       //Rota - home/signin
  {path:'signup/:nome', component: SignupComponent, canDeactivate: [AuthGuard]}, //Rota - home/signup
  // {path:'user/:id', component: DetalhamentoComponent}, //Rota para o exercicio 02 - slide 02
  {
    path:'user/:role', 
    component: AdmComponent,
    canActivate: [AuthGuard]
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
