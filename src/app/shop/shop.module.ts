import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ShopComponent } from './shop.component';
import { ShopMainComponent } from './components/shop-main/shop-main.component';
import { SidebarComponent } from './components/shop-main/sidebar/sidebar.component';
import { RightContentComponent } from './components/shop-main/right-content/right-content.component';


@NgModule({
  declarations: [ShopComponent, ShopMainComponent, SidebarComponent, RightContentComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule
  ]
})
export class ShopModule { }
