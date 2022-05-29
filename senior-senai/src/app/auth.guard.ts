import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';
import { ServicosGetService } from './services/servicos-get.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<SigninComponent>, CanLoad {
  user:string | null = "";

  constructor(
    private route:Router, 
    private servicos: ServicosGetService
  ){}
  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      console.warn("Entrei no activated");
      this.user = localStorage.getItem('user');
      let userObj = JSON.parse(this.user || "");

      return true;
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean {
      console.warn("Entrei no activated child");
    return true;
  }

  canDeactivate(
    component: SigninComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): boolean {

    if(component.text.length){
      alert("Deseja mesmo sair do formulario?");
      return false;
    }else{
      return true;
    }
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    console.warn("Cheguei no canLoad");

    return true;
  }
}
