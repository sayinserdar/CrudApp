import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from 'angularfire2/database';
import {FirebaseService} from './firebase.service';
import {StudentModel} from './list/student/student.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    items: Observable<any[]>;
  constructor(private db: AngularFireDatabase, private fb: FirebaseService) {
  }
}
