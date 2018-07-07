import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddComponent} from './add/add.component';
import {StudentsComponent} from './students/students.component';
import {StudentComponent} from './students/student/student.component';

const routes: Routes = [
  { path: 'list', component: StudentsComponent},
  { path: 'add', component: AddComponent},
  { path: 'update/:key', component: StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
