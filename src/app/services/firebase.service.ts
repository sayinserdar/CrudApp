import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {StudentModel} from '../students/student/student.model';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  itemsRef: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) {
    this.itemsRef = db.list<StudentModel>('Students');
  }
  getList(ref: string) {
    return this.db.list(ref).snapshotChanges();
  }

  addStudent(student: StudentModel) {
    this.itemsRef.push(student).then(() => {
      return true;
    });
  }
  deleteStudent(key: string) {
    this.itemsRef.remove(key);
  }
  updateStudent(key: string, data) {
    this.itemsRef.update(key, data);
  }
  deleteAll() {
    this.itemsRef.remove();
  }
}


