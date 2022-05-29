import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanDeactivate<unknown> {
  user: string | null = "";
  constructor(private router :Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.user = localStorage.getItem('user');
      debugger;
      if(this.user){
        let userObj = JSON.parse(this.user || "");
        console.log(userObj);
  
        if(userObj.idade >= 18){
          return true;
          // return true;
        }else{
          return this.router.navigateByUrl('/exercicio10/login');
        }
      }else{
        return this.router.navigateByUrl('/exercicio10/login');
      }

  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
