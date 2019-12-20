import { Injectable } from '@angular/core';
import { AuthenticationService } from 'src/app/main';

@Injectable()
export class GlobalDataService {

  url: string;
  apiUrl: string;
  eventsUrl: string;
  token: string;
  userName: string;

  constructor(
    private _authenticationService: AuthenticationService
  ) { 
    this.url = 'http://localhost:3123';
    this.apiUrl = 'http://localhost:3123/api';
    this.eventsUrl = 'http://localhost:3123/events';
    this.token = 'tralala';
    this.userName = this._authenticationService.userName;
  }
}
