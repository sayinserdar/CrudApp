import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-list',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Observable<any[]>;
  data: JSON[];
  constructor(private fire: FirebaseService) {
    this.students = this.fire.getList('Students');
  }
  ngOnInit() {
  }
  onDeleteStudent(key: string) {
    this.fire.deleteStudent(key);
  }
}
