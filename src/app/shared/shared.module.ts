import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';

import * as fromComponents from './components';
import { LoginComponent } from '../auth/components/login/login.component';
import { RegisterComponent } from '../auth/components/register/register.component';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    CarouselModule,
    WavesModule,
    RouterModule
  ],
  entryComponents: [
    LoginComponent, RegisterComponent
  ],
  exports: [...fromComponents.components, CommonModule, RouterModule]
})
export class SharedModule { }
