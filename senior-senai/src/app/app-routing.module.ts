import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //Rota default para a rota / irá enviar para a rota /home
    { path:'home', component: HomeComponent},
    { path:'signin', component: SigninComponent},
    { path:'signup', component: SignupComponent},
    { path: '**', component: NotFoundComponent} //Rota para url não declaradas
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }