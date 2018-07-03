import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {StudentModel} from './list/student/student.model';
import { map } from 'rxjs/operators';
import {s} from '@angular/core/src/render3';

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
    this.itemsRef.push(student);
  }
  deleteStudent(key: string) {
    this.itemsRef.remove(key);
  }
  updateStudent(key: string) {
  }
  deleteAll() {
    this.itemsRef.remove();
  }
}


