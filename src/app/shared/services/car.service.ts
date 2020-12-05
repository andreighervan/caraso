import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Car } from '../models/car';
import { BehaviorSubject, Observable } from 'rxjs';
import { convertSnaps, ICar } from 'src/app/core/models/Cars';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private searchFiltersSubject$ = new BehaviorSubject<Car>(null);
  searchFiltersAction = this.searchFiltersSubject$.asObservable();

  constructor(private db: AngularFirestore) { }

  getCars() {
    return this.db.collection('cars').snapshotChanges();
  }

  createCar(value) {
    const { contactDetails } = value;
    const { carDetails } = value;
    return this.db.collection('cars').add({
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

  setFilters(car: Car) {
    this.searchFiltersSubject$.next(car);
  }

  loadAllCars(): Observable<ICar[]> {
    return this.db.collection(
      'cars'
    )
      .snapshotChanges()
      .pipe(
        map(snaps => convertSnaps<ICar>(snaps)),
        first());
  }

}
