import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellACarRoutingModule } from './sell-a-car-routing.module';
import { MatStepperModule } from '@angular/material/stepper';

import { SellACarComponent } from './sell-a-car.component';
import { SectionSellACarComponent } from './components/section-sell-a-car/section-sell-a-car.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CarService } from '../shared/services/car.service';
import { RegistrationStep1Component } from './components/registration-step1/registration-step1.component';
import { RegistrationStep2Component } from './components/registration-step2/registration-step2.component';

@NgModule({
  declarations: [SellACarComponent,
    SectionSellACarComponent,
    RegistrationStep1Component,
    RegistrationStep2Component],
  imports: [
    CommonModule,
    SellACarRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatStepperModule,
    SharedModule
  ],
  providers: [CarService]
})
export class SellACarModule { }
