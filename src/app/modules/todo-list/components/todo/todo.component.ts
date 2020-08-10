import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Todo } from '../../types';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  @Input() todo: Todo;
}
