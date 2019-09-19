import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellACarRoutingModule } from './sell-a-car-routing.module';
import { MatStepperModule } from '@angular/material/stepper';

import { SellACarComponent } from './sell-a-car.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SectionSellACarComponent } from './components/section-sell-a-car/section-sell-a-car.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SellACarComponent,
    SectionSellACarComponent,
    BreadcrumbComponent],
  imports: [
    CommonModule,
    SellACarRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatStepperModule
  ]
})
export class SellACarModule { }
