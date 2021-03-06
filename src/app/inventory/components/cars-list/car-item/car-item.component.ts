import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { combineLatest, EMPTY, Observable, pipe, Subject, Subscription } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Car } from '../../../../shared/models/car';
import { CarService } from '../../../../shared/services/car.service';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss']
})
export class CarItemComponent implements OnInit, OnChanges, OnDestroy {

  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  filteredCars$;

  errorMessage: string;

  sub: Subscription;

  addedToCompare: boolean;

  searchByKeyword: string;
  cars;
  filteredCars: Car[] = [];
  groupFilters: Car;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.fetchCars();
    this.getFilteredCars();

    this.filteredCars$ = combineLatest([
      this.carService.getCars(),
      this.carService.searchFiltersAction
    ]).pipe(
      map(cars => console.log('cars', cars)),
      catchError(err => {
        this.errorMessageSubject.next(err);
        return EMPTY;
      })
    );

    this.sub = this.carService.getCars()
      .pipe(
        tap(cars => console.log('cars', cars))
      )
      .subscribe(
        cars => this.cars = cars,
        error => this.errorMessage = error
      );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnChanges(): void {
  }

  getFilteredCars() {
    this.carService.searchFiltersAction.subscribe(data => {
      this.groupFilters = data;
    }, error => console.log(error));
  }

  filterCarList(filters: Car, cars: any): void {
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
    this.carService.getCars().subscribe(carsArray => {
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
