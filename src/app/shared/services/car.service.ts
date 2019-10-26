import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private firestore: AngularFirestore) { }

  getCars() {
    return this.firestore.collection('cars').snapshotChanges();
  }

  createCar(value) {
    return this.firestore.collection('cars').add({
      carName: value.name,
      carYear: value.year
    });
  }

}
