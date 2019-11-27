import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
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
  ],
  exports: [LoginComponent, RegisterComponent, LoginInnerComponent]
})
export class AuthModule { }
