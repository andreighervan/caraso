import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { CarService } from 'src/app/shared/services/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-sell-a-car',
  templateUrl: './section-sell-a-car.component.html',
  styleUrls: ['./section-sell-a-car.component.scss']
})
export class SectionSellACarComponent implements OnInit {
  isLinear: boolean;
  secondStep: string;
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder,
    private carService: CarService,
    private router: Router) { }

  ngOnInit(): void {
    this.buildSellACarForm();
  }

  buildSellACarForm() {
    this.registrationForm = new FormGroup({
      'carDetails': new FormGroup({
        'make': new FormControl(null, Validators.required),
        'mileage': new FormControl(null),
        'model': new FormControl(null),
        'transmision': new FormControl(null),
        'year': new FormControl(null),
        'interiorColor': new FormControl(null),
        'exteriorColor': new FormControl(null),
        'vin': new FormControl(null),
        'body': new FormControl(null),
        'pasteALink': new FormControl(null)
      }),
      'contactDetails': new FormGroup({
        'firstName': new FormControl(null, [Validators.required]),
        'lastName': new FormControl(null),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'phone': new FormControl(null),
        'notes': new FormControl(null)
      })
    });
  }

  sendFormData(value) {
    this.carService.createCar(value)
      .then(
        res => {
          this.router.navigate(['/home']);
        }
      )
  }
}
