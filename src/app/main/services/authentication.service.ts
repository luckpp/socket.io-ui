import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  isAuthenticated: boolean;
  redirectUrl: string;

  constructor() {
    this.isAuthenticated = true;
  }
  
  login(userName: string, password: string) {
    this.isAuthenticated = true;
  }
}
