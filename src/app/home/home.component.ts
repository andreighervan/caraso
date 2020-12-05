import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ICar } from '../core/models/Cars';
import { CarService } from '../shared/services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cars$: Observable<ICar[]>;
  newCars$: Observable<ICar[]>;
  usedCars$: Observable<ICar[]>;

  constructor(private carsService: CarService) { }

  ngOnInit() {
    this.reloadCars();
  }

  reloadCars() {
    this.cars$ = this.carsService.loadAllCars();

    this.newCars$ = this.cars$.pipe(
      map(cars => cars.filter(
        car => car.isNew === true)));

    this.usedCars$ = this.cars$.pipe(
      map(cars => cars.filter(
        car => car.isNew === false)));
  }

  // TODO TRACKBY
  /* trackByCarNo(index: number, popularCars: ICar[]) {
    return popularCars.map(item => item.id);
  } */

}
