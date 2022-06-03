import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraFinalizadaComponent } from './compra-finalizada/compra-finalizada.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'compraFinalizada',
    component: CompraFinalizadaComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
