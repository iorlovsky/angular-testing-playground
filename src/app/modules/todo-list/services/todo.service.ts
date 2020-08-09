import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { createTodo } from '../todo.actions';
import { Todo } from '../types';

@Injectable()
export class TodoService {

  constructor(
    private store: Store<Todo[]>
  ) { }

  createTodo(todo: Todo): void {
    this.store.dispatch(createTodo(todo));
  }
}
