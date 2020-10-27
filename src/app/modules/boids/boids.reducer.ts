import { createReducer, on, Action } from '@ngrx/store';

import * as BoidsActions from './boids.actions';

export type BoidsState = {
  isDebugEnabled: boolean,
  isGridShown: boolean
};

export const initialState: BoidsState = {
  isDebugEnabled: true,
  isGridShown: false
};

const _boidsReducer = createReducer(
  initialState,
  on(BoidsActions.enableDebug, (state: BoidsState) => ({ ...state, isDebugEnabled: true })),
  on(BoidsActions.disableDebug, (state: BoidsState) => ({ ...state, isDebugEnabled: false })),
  on(BoidsActions.showGrid, (state: BoidsState) => ({ ...state, isGridShown: true })),
  on(BoidsActions.hideGrid, (state: BoidsState) => ({ ...state, isGridShown: false })),
);

export function boidsReducer(state: BoidsState, action: Action): BoidsState {
  return _boidsReducer(state, action);
}

export const boidsFeatureKey = 'boids';
