import { createAction } from '@ngrx/store';

export const enableDebug = createAction(
  '[Boids Page] Enable Debug',
);

export const disableDebug = createAction(
  '[Boids Page] Disable Debug',
);
