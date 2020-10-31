import { Component, OnInit } from '@angular/core';

import { ICar } from '../core/models/Cars';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  counter: number;
  cars: ICar[] = [];
  popularCars: ICar[] = [
    {
      id: 1, carName: 'Audi A7', isNew: true, price: 50000, imgUrl: './assets/img/cars/audi_a7.jpeg', combustible: 'Petrol',
      consumption: 7, seatsNo: 4, carType: 'Hatchback'
    },
    {
      id: 2, carName: 'Audi Q8', isNew: false, price: 73000, imgUrl: './assets/img/cars/audi_q8.jpg', combustible: 'Diesel',
      consumption: 9, seatsNo: 5, carType: 'Break'
    },
    {
      id: 3, carName: 'Mercedes AMG', isNew: true, price: 154000, imgUrl: './assets/img/cars/hummer.jpg', combustible: 'Petrol',
      consumption: 10, seatsNo: 5, carType: 'Hatchback'
    },
    {
      id: 4, carName: 'Mercedes CLA', isNew: false, price: 45000, imgUrl: './assets/img/cars/mercedes_cla.jpg', combustible: 'Petrol',
      consumption: 7, seatsNo: 4, carType: 'Hatchback'
    },
    {
      id: 5, carName: 'Reanault Captur', isNew: false, price: 87000, imgUrl: './assets/img/cars/renault_captur.jpg', combustible: 'Diesel',
      consumption: 9, seatsNo: 4, carType: 'Break'
    },
    {
      id: 6, carName: 'Seat Ibiza', isNew: true, price: 14000, imgUrl: './assets/img/cars/seat_ibitza.jpg', combustible: 'Petrol',
      consumption: 10, seatsNo: 5, carType: 'Hatchback'
    },
    {
      id: 7, carName: 'Tesla Model S', isNew: true, price: 50000, imgUrl: './assets/img/cars/tesla_model_s.jpg', combustible: 'Petrol',
      consumption: 7, seatsNo: 4, carType: 'Break'
    },
    {
      id: 8, carName: 'Volvo V60', isNew: false, price: 73000, imgUrl: './assets/img/cars/volvo_v60.jpg', combustible: 'Diesel',
      consumption: 9, seatsNo: 5, carType: 'Break'
    },
    {
      id: 9, carName: 'Lamborghini', isNew: true, price: 124000, imgUrl: './assets/img/cars/lamborghini.jpg', combustible: 'Petrol',
      consumption: 10, seatsNo: 4, carType: 'Hatchback'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.counter = 0;
    this.showAllCars();
  }

  showAllCars() {
    console.log(this.counter + 'dat size' + this.popularCars.length)

    for (let i = this.counter + 1; i < this.popularCars.length; i++) {
      this.cars.push(this.popularCars[i]);
      if (i % 8 === 0) {
        break;
      }
    }
    this.counter += 1;
  }

  // TODO TRACKBY
  /* trackByCarNo(index: number, popularCars: ICar[]) {
    return popularCars.map(item => item.id);
  } */

}
