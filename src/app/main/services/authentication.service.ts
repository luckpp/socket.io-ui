import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  userName: string;
  isAuthenticated: boolean;
  redirectUrl: string;

  constructor() {
    this.isAuthenticated = true;
  }
  
  login(userName: string, password: string) {
    this.userName = userName;
    this.isAuthenticated = true;
  }
}
