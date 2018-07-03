import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import {FirebaseService} from '../firebase.service';
import {st} from '@angular/core/src/render3';
import {StudentModel} from './student/student.model';
import {forEach} from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  students: Observable<any[]>;
  constructor(private fire: FirebaseService) {
  }

  ngOnInit() {
  }
  getList() {
    this.students = this.fire.getList('Students');
  }
  onDeleteStudent(key: string)  {
    this.fire.deleteStudent(key);
  }
  onUpdateStudent(key: string) {
    this.fire.updateStudent(key);
  }
}
