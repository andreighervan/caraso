import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';

import * as fromComponents from './components';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    CarouselModule,
    WavesModule,
    RouterModule
  ],
  exports: [...fromComponents.components, CommonModule, RouterModule]
})
export class SharedModule { }
