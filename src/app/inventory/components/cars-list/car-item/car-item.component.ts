import { Component, OnInit, OnChanges } from '@angular/core';
import { Car, CarFilter } from '../../../../shared/models/car';
import { CarService } from '../../../../shared/services/car.service';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss']
})
export class CarItemComponent implements OnInit, OnChanges {
  addedToCompare: boolean;

  searchByKeyword: string;
  cars;
  filteredCars: Car[] = [];
  groupFilters: CarFilter;

  constructor(private serviceCar: CarService) { }

  ngOnInit(): void {
    this.fetchCars();
    this.getFilteredCars();
  }

  ngOnChanges(): void {
  }

  getFilteredCars() {
    this.serviceCar.searchFilters.subscribe(data => {
      this.groupFilters = data;
    }, error => console.log(error));
  }

  filterCarList(filters: CarFilter, cars: any): void {
    this.filteredCars = cars;
    const keys = Object.keys(filters);
    const filterCar = car => {
      let result = keys.map(key => {
        if (car[key]) {
          return String(car[key]).toLowerCase().startsWith(String(filters[key]).toLowerCase())
        } else {
          return false;
        }
      });
      result = result.filter(it => it !== undefined);
      return result.reduce((acc, cur: any) => acc && cur, 1);
    }
    this.filteredCars = this.cars.filter(filterCar);
  }

  fetchCars() {
    this.serviceCar.getCars().subscribe(carsArray => {
      this.cars = carsArray.map(item => {
        const id = item.payload.doc.id;
        const cars = item.payload.doc.data() as Car;
        return { id, ...cars };
      });
      this.filterCarList(this.groupFilters, this.cars);
      this.filteredCars = this.filteredCars.length > 0 ? this.filteredCars : this.cars;
    });
  }

  onAddToCompare(index) {
    if (index > -1) {
      this.addedToCompare = true;
    }
  }
}
