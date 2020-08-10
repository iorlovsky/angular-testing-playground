import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { TodoFormService } from '../../services/todo-form.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFormComponent implements OnInit {

  @Output() submitEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  form: FormGroup;

  ngOnInit(): void {
    this.form = TodoFormService.getCreateTodoForm();
  }

  onSubmit(): void {
    Object.values(this.form.controls).forEach(control => control.markAsDirty());
    this.submitEvent.emit(this.form);
  }

}
