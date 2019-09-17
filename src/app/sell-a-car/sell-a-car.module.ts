import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellACarRoutingModule } from './sell-a-car-routing.module';
import { SellACarComponent } from './sell-a-car.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [SellACarComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    SellACarRoutingModule
  ]
})
export class SellACarModule { }
