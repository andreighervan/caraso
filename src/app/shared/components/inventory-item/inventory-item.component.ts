import { Component, OnInit, OnChanges } from '@angular/core';
import { Car, CarFilter } from '../../models/car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.scss']
})
export class InventoryItemComponent implements OnInit, OnChanges {
  searchByKeyword: string;
  cars: Car[];
  filteredCars: Car[];
  groupFilters: CarFilter;

  constructor(private serviceCar: CarService) { }

  ngOnInit() {
    this.fetchCars();
    this.getFilteredCars();
    if (this.groupFilters) {
      this.filterCarList(this.groupFilters);
    }
  }

   ngOnChanges(): void {
  
  }

  getFilteredCars() {
    this.serviceCar.searchFilters.subscribe(data => {
      this.groupFilters = data;
    }, error => console.log(error));
  }

  fetchCars() {
    this.serviceCar.getCars().subscribe(carsArray => {
      this.cars = carsArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Car;
      });
      this.filteredCars = this.filteredCars.length > 0 ? this.filteredCars : this.cars;
    });
  }

  filterCarList(filters: CarFilter): void {
    this.filteredCars = this.cars;
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
}
