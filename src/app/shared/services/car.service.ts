import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Car, CarFilter } from '../models/car';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  searchFilters = new Subject<CarFilter>();
  constructor(private firestore: AngularFirestore) { }

  getCars() {
    return this.firestore.collection('cars').snapshotChanges();
  }

  createCar(value) {
    const { contactDetails } = value;
    const { carDetails } = value;
    return this.firestore.collection('cars').add({
      make: carDetails.make,
      year: carDetails.year,
      mileage: carDetails.mileage,
      model: carDetails.model,
      transmision: carDetails.transmision,
      body: carDetails.body,
      interiorColor: carDetails.interiorColor,
      exteriorColor: carDetails.exteriorColor,
      price: carDetails.price,
      pasteALink: carDetails.pasteALink,
      firstName: contactDetails.firstName,
      lastName: contactDetails.lastName,
      email: contactDetails.email,
      phone: contactDetails.phone,
      notes: contactDetails.notes
    });
  }

}
