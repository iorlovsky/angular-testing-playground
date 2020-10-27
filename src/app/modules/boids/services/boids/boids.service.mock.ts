import { Provider } from '@angular/core';

import { BoidsService } from './boids.service';

class MockBoidsService {
  enableDebug(): void {
  }

  disableDebug(): void {
  }

  showGrid(): void {
  }

  hideGrid(): void {
  }
}

export function provideMockBoidsService(): Provider {
  return { provide: BoidsService, useClass: MockBoidsService };
}
