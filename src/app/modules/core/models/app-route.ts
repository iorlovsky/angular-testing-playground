export class AppRoute {
  constructor(private readonly route: string[]) {
  }

  asRoute(): string[] {
    return this.route;
  }

  asUrl(): string {
    return this.route.join('');
  }
}
