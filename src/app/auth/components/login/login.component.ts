import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authError: any;

  constructor(private auth: AuthService,
              public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
    this.doErrorHandler();
  }

  login(frm) {
    this.auth.login(frm.value.email, frm.value.password);
  }

  onNoClick(): void {
    this.dialogRef.close();
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
