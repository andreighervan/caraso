import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car';

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.scss']
})
export class InventoryItemComponent implements OnInit {
  cars: Car[];

  constructor(private serviceCar: CarService) { }

  ngOnInit() {
    this.fetchCars();
  }

  fetchCars() {
    this.serviceCar.getCars().subscribe(carsArray => {
      this.cars = carsArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Car;
      });
    });
  }
}
