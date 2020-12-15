import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  authError: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.doErrorHandler();
  }

  login(frm) {
    this.auth.login(frm.value.email, frm.value.password);
  }

  doErrorHandler() {
    this.auth.eventAuthError$.subscribe(data => {
      this.authError = data;
    });
  }

  doGoogleLogin() {
    this.auth.doGoogleLogin();
  }
  doFacebookLogin() {
    this.auth.doFacebookLogin();
  }

}
