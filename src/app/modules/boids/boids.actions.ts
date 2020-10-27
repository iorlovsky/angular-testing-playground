import { createAction } from '@ngrx/store';

export const enableDebug = createAction(
  '[Boids Page] Enable Debug',
);

export const disableDebug = createAction(
  '[Boids Page] Disable Debug',
);

export const showGrid = createAction(
  '[Boids Page] Show Grid'
);

export const hideGrid = createAction(
  '[Boids Page] Hide Grid'
);
