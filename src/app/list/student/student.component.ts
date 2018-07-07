import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../firebase.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Observable<any[]>;
  constructor(private fire: FirebaseService) { }

  ngOnInit() {
  }
}
