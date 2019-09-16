import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellACarComponent } from './sell-a-car.component';

const routes: Routes = [{ path: '', component: SellACarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellACarRoutingModule { }
