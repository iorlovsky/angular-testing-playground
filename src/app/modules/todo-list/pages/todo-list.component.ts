import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { TodoFormService } from '../services/todo-form.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = TodoFormService.getCreateTodoForm();
  }

  onSubmit(): void {
    Object.values(this.form.controls).forEach(control => control.markAsDirty());
    if (this.form.invalid) {
      return;
    }
  }

}
