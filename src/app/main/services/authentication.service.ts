import { Injectable } from '@angular/core';
import * as uuid from 'uuid/v1';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  isAuthenticated: boolean;
  redirectUrl: string;
  uuid: string;

  constructor() {
    this.isAuthenticated = true;
  }
  
  login(userName: string, password: string) {
    this.isAuthenticated = true;
    this.uuid = uuid();
  }
}
