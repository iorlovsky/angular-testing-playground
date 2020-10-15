import { createReducer, on, Action } from '@ngrx/store';

import * as BoidsActions from './boids.actions';

export type BoidsState = {
  isDebugEnabled: boolean
};

export const initialState: BoidsState = {
  isDebugEnabled: true
};

const _boidsReducer = createReducer(
  initialState,
  on(BoidsActions.enableDebug, state => ({ ...state, isDebugEnabled: true })),
  on(BoidsActions.disableDebug, state => ({ ...state, isDebugEnabled: false })),
);

export function boidsReducer(state: BoidsState, action: Action): BoidsState {
  return _boidsReducer(state, action);
}

export const boidsFeatureKey = 'boids';
