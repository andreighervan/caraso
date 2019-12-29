import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { CarService } from 'src/app/shared/services/car.service';

@Component({
  selector: 'app-section-sell-a-car',
  templateUrl: './section-sell-a-car.component.html',
  styleUrls: ['./section-sell-a-car.component.scss']
})
export class SectionSellACarComponent implements OnInit {
  isLinear: boolean;
  secondStep: string;
  sellACarForm: FormGroup;
  carInfoFormGroup: FormGroup;
  carInfoFormGroupSecond: FormGroup;

  constructor(private fb: FormBuilder,
              private carService: CarService) { }

  ngOnInit() {
    this.buildCarFormArray();
    this.buildSellACarForm();
    this.buildSellACarFormSecond();
  }

  /** Returns a FormArray with the name 'formArray'. */
  get formArray(): AbstractControl | null { return this.sellACarForm.get('carFormArray'); }

  buildCarFormArray() {
    this.sellACarForm = this.fb.group({
      carFormArray: this.fb.array([
        this.fb.group({
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
        }),
        this.fb.group({
          firstName: ['', Validators.required],
          lastName: [''],
          email: [''],
          phone: [''],
          notes: ['']
        }),
      ])
    });
  }

  buildSellACarForm() {
    this.carInfoFormGroup = this.fb.group({
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

  buildSellACarFormSecond() {
    this.carInfoFormGroupSecond = this.fb.group({
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

}
