import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  successMessage: string;

  // login form
  public loginForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
              public authService: AuthService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.buildLoginForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  tryLogin(value) {
    this.authService.doRegister(value)
      .then(res => {
        console.log(res);
        this.errorMessage = '';
        this.successMessage = 'Your account has been created';
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';
      });
  }

  buildLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
