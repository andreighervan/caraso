import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { ContactMainComponent } from './components/contact-main/contact-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormFieldErrorPipe } from './pipes/form-error.pipe';


@NgModule({
  declarations: [ContactUsComponent, ContactMainComponent, FormFieldErrorPipe],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactUsModule { }
