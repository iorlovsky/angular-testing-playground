import { Injectable } from '@angular/core';

import { AppRoute } from '../models/app-route';

type AppRouteName = 'home'
  | 'todoList'
  | 'boids';

@Injectable()
export class AppRoutes {
  private readonly routes: Record<AppRouteName, AppRoute> = {
    home: new AppRoute(['/']),
    todoList: new AppRoute(['/', 'todo-list']),
    boids: new AppRoute(['/', 'boids'])
  };

  get(name: AppRouteName): AppRoute {
    return this.routes[name];
  }
}
