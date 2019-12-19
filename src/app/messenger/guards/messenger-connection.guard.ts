import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SocketService } from 'src/app/shared';

@Injectable()
export class MessengerConnectionGuard implements CanActivate {

  constructor(
    private _socketService: SocketService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Promise(async (resolve, reject) => {
      try {
        let result = await this._socketService.connect();
        resolve(result);
      } catch(error) {
        reject(error);
      }
    });
  }
}
