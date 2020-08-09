import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { TodoListComponent } from './pages/todo-list.component';
import { TodoFormService } from './services/todo-form.service';
import { TodoListRoutingModule } from './todo-list-routing.module';

@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    SharedModule
  ],
  providers: [
    TodoFormService
  ]
})
export class TodoListModule { }
