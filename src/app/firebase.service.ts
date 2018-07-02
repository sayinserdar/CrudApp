import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {StudentModel} from './list/student/student.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.itemsRef = db.list('items');
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }
  getList() {
    return this.db.list('items').snapshotChanges();
  }
  addStudent(student: StudentModel) {
    this.itemsRef.push(student);

  }
}


