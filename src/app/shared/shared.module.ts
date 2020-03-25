import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';

import * as fromComponents from './components';
import { LoginComponent } from '../auth/components/login/login.component';
import { RegisterComponent } from '../auth/components/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../core/material/material.module';

import { FilterPipe } from './pipe/filter.pipe';
import { CategorySidebarComponent } from './components/category-sidebar/category-sidebar.component';

@NgModule({
  declarations: [...fromComponents.components, FilterPipe, CategorySidebarComponent],
  imports: [
    CommonModule,
    CarouselModule,
    WavesModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    CoreModule,
    FormsModule
  ],
  entryComponents: [
    LoginComponent, RegisterComponent
  ],
  exports: [...fromComponents.components, CommonModule, RouterModule, MaterialModule]
})
export class SharedModule { }
