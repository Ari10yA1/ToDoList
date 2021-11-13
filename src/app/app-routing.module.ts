import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDetailsComponentComponent } from './todo-details-component/todo-details-component.component';
import { TodoListComponentComponent } from './todo-list-component/todo-list-component.component';

import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path:'',component: TodoComponent},
  { path:'list', component: TodoListComponentComponent },
  { path:'details', component: TodoDetailsComponentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
