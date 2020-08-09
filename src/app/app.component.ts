import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AppRoutes } from './constants/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly todoListRoute: string;

  constructor() {
    this.todoListRoute = AppRoutes.TodoList.join('');
  }

}
