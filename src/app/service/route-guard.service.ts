import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService,
     private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.hardcodedAuthenticationService.isUserLoggedIn){
      console.log('User logged in')
      return true;
    }
    console.log('user not logged in...')
    this.router.navigate(['login'])
    return false;
  }
}
