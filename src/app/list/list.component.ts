import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
  }


  ngOnInit() {
  }

}
