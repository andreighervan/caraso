import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first,map } from 'rxjs/operators';
import { convertSnaps, ICar } from 'src/app/core/models/Cars';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private db: AngularFirestore) { }

  findLessons(courseId: string, sortOrder = 'asc',
    pageNumber = 0, pageSize = 3): Observable<ICar[]> {

    return this.db.collection(`cars/${carId}`,
      ref => ref.orderBy('seqNo', sortOrder)
        .limit(pageSize)
        .startAfter(pageNumber * pageSize))
      .snapshotChanges()
      .pipe(
        map(snaps => convertSnaps<ICar>(snaps)),
        first()
      )

  }
}
