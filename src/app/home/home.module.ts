import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { SliderComponent } from './components/slider/slider.component';
import { SearchComponent } from './components/search/search.component';
import { PopularCarComponent } from './components/popular-car/popular-car.component';
import { CtaComponent } from './components/cta/cta.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { PostsComponent } from './components/posts/posts.component';
import { PartnersComponent } from './components/partners/partners.component';
import { MapComponent } from './components/map/map.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [HomeComponent, CtaComponent, PopularCarComponent,
    SearchComponent, SliderComponent, TestimonialsComponent,
    PostsComponent, PartnersComponent, MapComponent, ContactComponent],
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule,
    WavesModule,
    NgbModule,
    NgSelectModule
  ]
})
export class HomeModule { }
