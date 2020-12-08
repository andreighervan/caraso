import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import { ICar } from '../core/models/Cars';
import { CarService } from '../shared/services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly NEW_CARS = 'New Cars';
  readonly OLD_CARS = 'Old Cars';

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

  loadCars(carOldOrNew: string) {
    this.lastPageLoaded++;

    this.loading = true;

    this.carsService.loadAllCars(carOldOrNew,
      this.lastPageLoaded)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(cars => this.cars = this.cars.concat(cars));
  }

  // TODO TRACKBY
  /* trackByCarNo(index: number, popularCars: ICar[]) {
    return popularCars.map(item => item.id);
  } */

}
