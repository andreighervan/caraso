import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private firestore: AngularFirestore) { }

  getCars() {
    return this.firestore.collection('cars').snapshotChanges();
  }

  createCar(value: Car) {
    return this.firestore.collection('cars').add({
      make: value.make,
      year: value.year,
      mileage: value.mileage,
      model: value.model,
      transmision: value.transmision,
      body: value.body,
      interiorColor: value.interiorColor,
      exteriorColor: value.exteriorColor,
      vin: value.vin,
      pasteALink: value.pasteALink
    });
  }

  createCarSecond(value: Car) {
    return this.firestore.collection('cars').add({
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      year: value.year,
      phone: value.phone
    });
  }

}
