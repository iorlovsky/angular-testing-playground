import { createSelector } from '@ngrx/store';

import { selectBoids } from '../../app.selectors';
import { BoidsState } from './boids.reducer';

export const selectIsDebugEnabled = createSelector(
  selectBoids,
  (state: BoidsState) => state.isDebugEnabled
);

export const selectIsGridShown = createSelector(
  selectBoids,
  (state: BoidsState) => state.isGridShown
);
