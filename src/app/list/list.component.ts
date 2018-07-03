import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import {FirebaseService} from '../firebase.service';
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
}
