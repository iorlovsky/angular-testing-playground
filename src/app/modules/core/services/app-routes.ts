import { Injectable } from '@angular/core';

import { AppRoute } from '../models/app-route';

@Injectable()
export class AppRoutes {
  readonly home: AppRoute = new AppRoute(['/']);
  readonly todoList: AppRoute = new AppRoute(['/', 'todo-list']);
  readonly boids: AppRoute = new AppRoute(['/', 'boids']);
}
