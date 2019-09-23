import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SectionSearchComponent } from './components/section-search/section-search.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SearchComponent, SectionSearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class SearchModule { }
