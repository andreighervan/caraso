import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { SingleProductRoutingModule } from './single-product-routing.module';
import { SingleProductComponent } from './single-product.component';
import { SpMainComponent } from './components/sp-main/sp-main.component';
import { SpSidebarComponent } from './components/sp-sidebar/sp-sidebar.component';


@NgModule({
  declarations: [SingleProductComponent, SpMainComponent, SpSidebarComponent],
  imports: [
    CommonModule,
    SingleProductRoutingModule,
    SharedModule
  ]
})
export class SingleProductModule { }
