import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarService } from 'src/app/shared/services/car.service';

@Component({
  selector: 'app-section-sell-a-car',
  templateUrl: './section-sell-a-car.component.html',
  styleUrls: ['./section-sell-a-car.component.scss']
})
export class SectionSellACarComponent implements OnInit {
  public isLinear: boolean;
  public secondStep: string;
  public sellACarForm: FormGroup;

  constructor(private fb: FormBuilder,
              private carService: CarService) { }

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

  onSubmit(value) {
    this.carService.createCar(value)
      .then(
        res => {
        }
      );
  }

  onSubmitTwo() {
    console.log(this.sellACarForm.value);
  }

}
