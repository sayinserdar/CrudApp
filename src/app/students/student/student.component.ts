import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  key: string;
  @ViewChild('newStudent') newStudentRef: ElementRef;
  @ViewChild('newCustodian') newCustodianRef: ElementRef;
  @ViewChild('newClass') newClassRef: ElementRef;
  constructor(private fire: FirebaseService, private route: ActivatedRoute) {
    this.key = this.route.snapshot.params['key'];
  }

  ngOnInit() {
  }
  onUpdateSelected() {
    this.fire.updateStudent(this.key,
      {
        studentName: this.newStudentRef.nativeElement.value,
        custodianName: this.newCustodianRef.nativeElement.value,
        className: this.newClassRef.nativeElement.value
      });
  }

}
