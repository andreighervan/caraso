import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import { RegisterComponent } from 'src/app/auth/components/register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '30%',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }


  openRegister(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '30%',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
