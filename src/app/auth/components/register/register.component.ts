import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  authError: any;

  constructor(public dialogRef: MatDialogRef<RegisterComponent>,
    private auth: AuthService) { }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe(data => {
      this.authError = data;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createUser(frm) {
    this.auth.createUser(frm.value);
  }

  doGoogleLogin() {
    this.auth.doGoogleLogin();
  }

  doFacebookLogin() {
    this.auth.doFacebookLogin();
  }

}
