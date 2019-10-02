import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { LoginInnerComponent } from './components/login-inner/login-inner.component';
import { RegisterInnerComponent } from './components/register-inner/register-inner.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent, LoginInnerComponent, RegisterInnerComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class AuthModule { }
