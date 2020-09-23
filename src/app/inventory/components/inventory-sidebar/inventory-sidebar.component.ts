import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { CarCombo, Car } from 'src/app/shared/models/car';
import { CarService } from 'src/app/shared/services/car.service';

@Component({
  selector: 'app-inventory-sidebar',
  templateUrl: './inventory-sidebar.component.html',
  styleUrls: ['./inventory-sidebar.component.scss']
})
export class InventorySidebarComponent implements OnInit {
  searchForm: FormGroup;
  makes: CarCombo[] = [
    { value: 'Volksvagen', viewValue: 'Volksvagen' },
    { value: 'audi', viewValue: 'Audi' },
    { value: 'mercedes', viewValue: 'Mercedes' }
  ];

  models: CarCombo[] = [
    { value: 'Golf', viewValue: 'Volksvagen Golf' },
    { value: 'audi-a8', viewValue: 'Audi A8' },
    { value: 'mercedes-benz', viewValue: 'Mercedes Benz' }
  ];

  constructor(private fb: FormBuilder,
    private carService: CarService,
    private route: Router) { }

  ngOnInit() {
    this.buildSearchForm();
   }

  // search form init
  buildSearchForm() {
    this.searchForm = this.fb.group({
      make: [''],
      model: ['']
    });
  }

  search(filters: Car): void {
    const { model, make } = this.searchForm.value;
    console.log('value', model, make);

    Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
    this.carService.setFilters(filters);
    this.route.navigateByUrl('/inventory');
  }
}
