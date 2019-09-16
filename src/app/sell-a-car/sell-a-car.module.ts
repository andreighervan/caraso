import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellACarRoutingModule } from './sell-a-car-routing.module';
import { SellACarComponent } from './sell-a-car.component';


@NgModule({
  declarations: [SellACarComponent],
  imports: [
    CommonModule,
    SellACarRoutingModule
  ]
})
export class SellACarModule { }
