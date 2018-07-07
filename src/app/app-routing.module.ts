import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddComponent} from './add/add.component';
import {ListComponent} from './list/list.component';
import {AppComponent} from './app.component';
import {StudentComponent} from './list/student/student.component';
import {UpdateComponent} from './update/update.component';

const routes: Routes = [
  { path: 'list', component: ListComponent},
  { path: 'add', component: AddComponent},
  { path: 'update', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
