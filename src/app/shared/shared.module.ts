import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';

import { HeaderComponent } from './components/header/header.component';
import { SharedComponent } from './shared.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { InventoryItemComponent } from './components/inventory-item/inventory-item.component';

@NgModule({
  declarations: [HeaderComponent, SharedComponent, FooterComponent, BreadcrumbComponent, InventoryItemComponent],
  imports: [
    CommonModule,
    CarouselModule,
    WavesModule
  ],
  exports: [HeaderComponent, FooterComponent, BreadcrumbComponent, InventoryItemComponent, CommonModule]
})
export class SharedModule { }
