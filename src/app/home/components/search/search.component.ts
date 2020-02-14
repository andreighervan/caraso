import { Component, OnInit } from '@angular/core';

import { CarCombo } from 'src/app/shared/models/car';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  makes: CarCombo[] = [
    { value: 'vw golf', viewValue: 'VW Golf' },
    { value: 'audi', viewValue: 'Audi A8' },
    { value: 'mercedes', viewValue: 'Mercedes' }
  ];

  models: CarCombo[] = [
    { value: 'vw', viewValue: 'Volksvagen' },
    { value: 'audi', viewValue: 'Audi' },
    { value: 'mercedes', viewValue: 'Mercedes' }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildSearchForm();
  }

  // search form init
  buildSearchForm() {
    this.searchForm = this.fb.group({
      makes: [''],
      models: ['']
    });
  }

  onSubmit() {
    const { models, makes } = this.searchForm.value;
    console.log('value', models, makes);
  }
}
