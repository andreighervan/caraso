import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { InventorySidebarComponent } from './components/inventory-sidebar/inventory-sidebar.component';
import { InventoryContentComponent } from './components/inventory-content/inventory-content.component';
import { InventoryHeaderComponent } from './components/inventory-header/inventory-header.component';


@NgModule({
  declarations: [InventoryComponent, InventorySidebarComponent, InventoryContentComponent, InventoryHeaderComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedModule
  ]
})
export class InventoryModule { }
