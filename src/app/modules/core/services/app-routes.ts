import { Injectable } from '@angular/core';

class AppRoute {
  constructor(private readonly route: string[]) {
  }

  asRoute(): string[] {
    return this.route;
  }

  asUrl(): string {
    return this.route.join('');
  }
}

@Injectable()
export class AppRoutes {
  readonly home: AppRoute = new AppRoute(['/']);
  readonly todoList: AppRoute = new AppRoute(['/', 'todo-list']);
  readonly boids: AppRoute = new AppRoute(['/', 'boids']);
}
