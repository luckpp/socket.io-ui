import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;

  constructor(
    private _router: Router,
    private _authenticationService: AuthenticationService
  ) { 
    //this.userName = 'dummyuser';
    this.password = 'dummypassword';
  }

  ngOnInit() {
  }

  login() {
    this._authenticationService.login(
      this.userName,
      this.password
    );
    if (this._authenticationService.redirectUrl) {
      this._router.navigate([this._authenticationService.redirectUrl]);
    } else {
      this._router.navigate(['/messenger/dashboard']);
    }
  }
}
