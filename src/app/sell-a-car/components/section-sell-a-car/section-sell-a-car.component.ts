import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-section-sell-a-car',
  templateUrl: './section-sell-a-car.component.html',
  styleUrls: ['./section-sell-a-car.component.scss']
})
export class SectionSellACarComponent implements OnInit {
  private isLinear: boolean;
  public sellACarForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildSellACarForm();
  }

  public buildSellACarForm() {
    this.sellACarForm = this.fb.group({
      make: ['', Validators.required],
      year: [''],
      mileage: [''],
      model: [''],
      transmision: [''],
      body: [''],
      interiorColor: [''],
      exteriorColor: [''],
      vin: [''],
      pasteALink: [''],
      firstName: ['', Validators.required],
      lastName: [''],
      email: [''],
      phone: [''],
      notes: ['']
    });
  }

  sendData() {
    return this.sellACarForm.value;
  }

  sendDataFormTwo() {
    console.log(this.sellACarForm.value);
  }

}
