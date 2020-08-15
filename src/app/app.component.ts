import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AppRoutes } from './modules/core/services/app-routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly todoListUrl: string;
  readonly boidsUrl: string;

  constructor(
    private appRoutes: AppRoutes
  ) {
    this.todoListUrl = appRoutes.todoList.asUrl();
    this.boidsUrl = appRoutes.boids.asUrl();
  }

}
