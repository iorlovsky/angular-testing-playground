import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { TodoFormService } from '../services/todo-form.service';
import { TodoService } from '../services/todo.service';
import { Todo } from '../types';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  form: FormGroup;

  readonly todos$: Observable<Todo[]>;

  constructor(
    private todoService: TodoService,
    private store: Store<{ todos: Todo[] }>
  ) {
    this.todos$ = this.store.pipe(select('todos'));
  }

  ngOnInit(): void {
    this.form = TodoFormService.getCreateTodoForm();
  }

  onSubmit(): void {
    Object.values(this.form.controls).forEach(control => control.markAsDirty());
    if (this.form.invalid) {
      return;
    }
    this.todoService.createTodo(this.form.value);
  }

}
