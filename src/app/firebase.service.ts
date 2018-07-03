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
  constructor(private db: AngularFireDatabase) {
    this.itemsRef = db.list('Students');
  }
  getList(ref: string) {
    return this.db.list(ref).valueChanges();
  }
  addStudent(student: StudentModel) {
    this.itemsRef.push(student);
  }
  deleteStudent(studentName: string) {
    this.itemsRef.remove(studentName);
  }
  updateStudent(studentName: string) {
  }
  deleteAll() {
    this.itemsRef.remove();
  }
}


