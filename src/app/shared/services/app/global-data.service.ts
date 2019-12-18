import { Injectable } from '@angular/core';
import { AuthenticationService } from 'src/app/main';

@Injectable()
export class GlobalDataService {

  public url: string;
  public uuid: string;
  public token: string;

  constructor(
    private _authenticationService: AuthenticationService
  ) { 
    this.url = 'http://localhost:3123/message';
    this.uuid = this._authenticationService.uuid;
    this.token = 'tralala';
  }
}
