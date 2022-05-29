import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //Rota default para a rota / irá enviar para a rota /home
    //Forma de gerenciamento de rotas filhas com children
    // { path:'home', component: HomeComponent, 
    //     children: [
    //         {path: 'signin', component: SigninComponent},  // Rota - home/signin
    //         {path:'signup', component: SignupComponent},  // Rota - home/signup
    //     ]
    // },
    //Forma de importação para módulos de rotas filhas em outros arquivos
    { 
        path: 'home', 
        canActivateChild: [AuthGuard],
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
        loadChildren: 
            () => 
            import('./home/home.module')
            .then(m => m.HomeModule)
            .catch()
    },
    { path: '**', component: NotFoundComponent} //Rota para url não declaradas
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }