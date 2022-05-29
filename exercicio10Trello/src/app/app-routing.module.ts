import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExercicioUmComponent } from './exercicio-um/exercicio-um.component';

const routes: Routes = [
    { path: 'exercicio01', component:ExercicioUmComponent },
    { path: 'exercicio10', 
        loadChildren: () =>
            import('./exercicio-dez/routes-routing.module')
            .then(m => m.RoutesRoutingModule )
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }