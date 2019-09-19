import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-section-sell-a-car',
  templateUrl: './section-sell-a-car.component.html',
  styleUrls: ['./section-sell-a-car.component.scss']
})
export class SectionSellACarComponent implements OnInit {
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
      pasteALink: ['']
    });
  }

  sendData() {
    return this.sellACarForm.value;
  }

}
