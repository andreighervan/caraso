import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CarCombo } from 'src/app/shared/models/car';

@Component({
  selector: 'app-registration-step1',
  templateUrl: './registration-step1.component.html',
  styleUrls: ['./registration-step1.component.scss']
})
export class RegistrationStep1Component implements OnInit {

  models: CarCombo[] = [
    { value: 'Golf', viewValue: 'Volksvagen Golf' },
    { value: 'audi-a8', viewValue: 'Audi A8' },
    { value: 'mercedes-benz', viewValue: 'Mercedes Benz' }
  ];

  makes: CarCombo[] = [
    { value: 'Volksvagen', viewValue: 'Volksvagen' },
    { value: 'audi', viewValue: 'Audi' },
    { value: 'mercedes', viewValue: 'Mercedes' }
  ];

  constructor() { }

  @Input() regForm: FormGroup;

  ngOnInit() {
  }

  step1Submitted() {
  }

}