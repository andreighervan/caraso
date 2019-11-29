import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { ContactMainComponent } from './components/contact-main/contact-main.component';


@NgModule({
  declarations: [ContactUsComponent, ContactMainComponent],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    SharedModule
  ]
})
export class ContactUsModule { }
