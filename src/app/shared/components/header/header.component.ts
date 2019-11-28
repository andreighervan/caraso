import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import { RegisterComponent } from 'src/app/auth/components/register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '50%',
      height: '70%'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }


  openRegister(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '50%',
      height: '70%'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
