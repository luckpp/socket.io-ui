import { Injectable } from '@angular/core';
import { AuthenticationService } from 'src/app/main';

@Injectable()
export class GlobalDataService {

  url: string;
  token: string;
  userName: string;

  constructor(
    private _authenticationService: AuthenticationService
  ) { 
    this.url = 'http://localhost:3123';
    this.token = 'tralala';
    this.userName = this._authenticationService.userName;
  }
}
