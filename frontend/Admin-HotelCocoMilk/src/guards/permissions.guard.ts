import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/core/servicios/login.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {

  constructor(private loginService: LoginService, private route: Router){

  }

  redirect(flag: boolean): any {
    if(!flag){
      this.route.navigate([''])
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    var authentication = false;
    
    if (localStorage.getItem('id') != null){
      console.log("id: " + localStorage.getItem('id') );
      authentication = true;
    }

    this.redirect(authentication);
    return authentication;
  }
  
}
