import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalDataService } from '../app/global-data.service';
import { User } from 'src/app/model';

@Injectable()
export class UsersService {

  constructor(
    private _http: HttpClient,
    private _globalDataService: GlobalDataService
  ) { }

    public getUsers(): Promise<User[]> {
      let apiUrl = this._globalDataService.apiUrl;
      let usersUrl = `${apiUrl}/users`;
      let result = this._http.get(usersUrl).toPromise();
      return result as Promise<User[]>;
    }

}
