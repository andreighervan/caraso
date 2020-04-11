import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { SharedModule } from '../shared/shared.module';
import { SectionOurTeamComponent } from './components/section-our-team/section-our-team.component';
import { SectionWhyChooseUsComponent } from './components/section-why-choose-us/section-why-choose-us.component';
import { SectionTestimonialsComponent } from './components/section-testimonials/section-testimonials.component';
import { SectionWelcomeMessageComponent } from './components/section-welcome-message/section-welcome-message.component';


@NgModule({
  declarations: [AboutUsComponent, SectionOurTeamComponent, SectionWhyChooseUsComponent, SectionTestimonialsComponent, SectionWelcomeMessageComponent],
  imports: [
    CommonModule,
    SharedModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
