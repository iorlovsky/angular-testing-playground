import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { AppRoutes } from './modules/core/services/app-routes';
import { isNavigationEnd } from './type-guards/router-events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly todoListUrl: string;
  readonly boidsUrl: string;
  readonly canShowHeader$: Observable<boolean>;

  constructor(
    private appRoutes: AppRoutes,
    private router: Router
  ) {
    this.todoListUrl = appRoutes.todoList.asUrl();
    this.boidsUrl = appRoutes.boids.asUrl();
    this.canShowHeader$ = this.router.events
      .pipe(
        filter(isNavigationEnd),
        map(event => event.url !== this.appRoutes.boids.asUrl())
      );
  }

}
