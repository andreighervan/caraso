import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, finalize, map } from 'rxjs/operators';

import { ICar } from '../core/models/Cars';
import { CarService } from '../shared/services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly NEW_CARS = true;
  readonly USED_CARS = false;

  cars: ICar[];
  newCars: ICar[];
  usedCars: ICar[];

  lastPageLoaded = 0;
  loading = false;

  constructor(private carsService: CarService) { }

  ngOnInit() {
    this.loading = true;

    this.carsService.loadAllCars()
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(
        cars => {
          this.cars = cars,
            this.newCars = cars.filter(
              car => car.isNew === true),
            this.usedCars = cars.filter(
              car => car.isNew === false)
        }
      );
  }

  loadCars(carOldOrNew: boolean=false) {
    this.lastPageLoaded++;

    this.loading = true;

    this.carsService.loadAllCars(this.lastPageLoaded)
      .pipe(
        finalize(() => this.loading = false)
      ).subscribe(cars => this.loadOldOrNewCars(cars, carOldOrNew));
  }

  loadOldOrNewCars(car: ICar[], carOldOrNew: boolean) {
    this.cars.concat(car);
    this.newCars = this.newCars.concat(this.cars.filter(carItem => carItem.isNew === carOldOrNew));
    this.usedCars = this.usedCars.concat(this.cars.filter(carItem => carItem.isNew === carOldOrNew));
  }

  // TODO TRACKBY
  /* trackByCarNo(index: number, popularCars: ICar[]) {
    return popularCars.map(item => item.id);
  } */

}
