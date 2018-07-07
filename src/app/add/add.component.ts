import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {StudentModel} from '../students/student/student.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newStudent = new StudentModel (null, null, null);
  @ViewChild('studentName') studentNameRef: ElementRef;
  @ViewChild('custodianName') custodianNameRef: ElementRef;
  @ViewChild('className') classNameRef: ElementRef;
  constructor(private fire: FirebaseService) { }

  ngOnInit() {
  }
  onAddSelected() {
    this.newStudent.studentName = this.studentNameRef.nativeElement.value;
    this.newStudent.custodianName = this.custodianNameRef.nativeElement.value;
    this.newStudent.className = this.classNameRef.nativeElement.value;
    this.fire.addStudent(this.newStudent);
  }


}
