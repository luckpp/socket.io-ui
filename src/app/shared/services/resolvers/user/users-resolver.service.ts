import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from 'src/app/model';
import { Observable } from 'rxjs';
import { UsersService } from '../../api/users.service';

@Injectable()
export class UsersResolverService implements Resolve<User[]> {

  constructor(
    private _usersService: UsersService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User[] | Observable<User[]> | Promise<User[]> {
    return this._usersService.getUsers();
  }
}
