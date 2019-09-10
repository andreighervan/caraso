import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';;
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';

import { HeaderComponent } from './header/header.component';
import { SharedComponent } from './shared.component';

@NgModule({
  declarations: [HeaderComponent, SharedComponent],
  imports: [
    CommonModule,
    CarouselModule,
    WavesModule
  ],
  exports:[HeaderComponent, CommonModule]
})
export class SharedModule { }
