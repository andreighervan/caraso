import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';;
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';

import { HeaderComponent } from './header/header.component';
import { SharedComponent } from './shared.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, SharedComponent, FooterComponent],
  imports: [
    CommonModule,
    CarouselModule,
    WavesModule
  ],
  exports: [HeaderComponent, FooterComponent, CommonModule]
})
export class SharedModule { }
