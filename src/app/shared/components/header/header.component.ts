import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import { RegisterComponent } from 'src/app/auth/components/register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  menu = {
    LANGMENU : false,
    CURRMENU : false
  }

  languages = [
    { value: 'ENGLISH', viewValue: 'ENG' },
    { value: 'FRENCH', viewValue: 'FR' }
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openMenu(menu): void {
    this.menu[menu] = !this.menu[menu];
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
