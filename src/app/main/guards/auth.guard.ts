import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _authenticationService: AuthenticationService,
  ) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
    if (!this._authenticationService.isAuthenticated) {
      this._authenticationService.redirectUrl = state.url;
      this._router.navigate(['/main/login']);
      return false;
    }
    return true;
  }
}
