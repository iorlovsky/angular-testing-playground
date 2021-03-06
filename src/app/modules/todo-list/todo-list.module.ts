import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './pages/todo-list.component';
import { TodoFormService } from './services/todo-form.service';
import { TodoService } from './services/todo.service';
import { TodoListRoutingModule } from './todo-list-routing.module';
import * as fromTodo from './todo.reducer';

@NgModule({
  declarations: [TodoListComponent, TodoComponent, TodoFormComponent],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromTodo.todoFeatureKey, fromTodo.todoReducer)
  ],
  providers: [
    TodoFormService,
    TodoService
  ]
})
export class TodoListModule { }
