import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { InventorySidebarComponent } from './components/inventory-sidebar/inventory-sidebar.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { InventoryHeaderComponent } from './components/inventory-header/inventory-header.component';
import { CarItemComponent } from './components/cars-list/car-item/car-item.component';


@NgModule({
  declarations: [InventoryComponent,
    InventorySidebarComponent,
    CarsListComponent,
    InventoryHeaderComponent,
    CarItemComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedModule
  ]
})
export class InventoryModule { }
