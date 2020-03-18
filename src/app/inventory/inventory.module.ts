import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { InventorySidebarComponent } from './components/inventory-sidebar/inventory-sidebar.component';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { InventoryHeaderComponent } from './components/inventory-header/inventory-header.component';
import { InventoryItemComponent } from './components/inventory-list/inventory-item/inventory-item.component';


@NgModule({
  declarations: [InventoryComponent,
    InventorySidebarComponent,
    InventoryListComponent,
    InventoryHeaderComponent,
    InventoryItemComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedModule
  ]
})
export class InventoryModule { }
