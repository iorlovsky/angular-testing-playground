import { AppRouteName } from '../../../types/routes';
import { AppRoute } from '../models/app-route';

export class MockAppRoutes {
  get(name: AppRouteName): AppRoute {
    return new AppRoute(['']);
  }
}
