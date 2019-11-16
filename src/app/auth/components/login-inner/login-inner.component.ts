import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-inner',
  templateUrl: './login-inner.component.html',
  styleUrls: ['./login-inner.component.scss']
})
export class LoginInnerComponent implements OnInit{

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  tryRegister() {
  }

  doRegister() {
  }

}
