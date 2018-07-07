import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from 'angularfire2/database';
import {FirebaseService} from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    items: Observable<any[]>;
  constructor(private db: AngularFireDatabase, private fb: FirebaseService) {
  }
  deleteAll() {
    this.fb.deleteAll();
  }
}
