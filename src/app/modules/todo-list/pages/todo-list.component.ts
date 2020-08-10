import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { TodoService } from '../services/todo.service';
import { Todo } from '../types';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {

  readonly todos$: Observable<Todo[]>;

  constructor(
    private todoService: TodoService,
    private store: Store<{ todos: Todo[] }>
  ) {
    this.todos$ = this.store.pipe(select('todos'));
  }

  identifyTodo(idx: number, todo: Todo): string {
    return todo.createdTime;
  }

  onSubmit(form: FormGroup): void {
    if (form.invalid) {
      return;
    }
    this.todoService.createTodo({
      ...form.value,
      createdTime: new Date().toISOString()
    });
  }

}
