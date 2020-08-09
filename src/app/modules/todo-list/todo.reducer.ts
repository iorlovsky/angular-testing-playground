import { createReducer, on, Action } from '@ngrx/store';

import * as TodoActions from './todo.actions';
import { Todo } from './types';

export const initialState: Todo[] = [];

const _todoReducer = createReducer(
  initialState,
  on(TodoActions.createTodo, (state, payload) => [...state, payload])
);

export function todoReducer(state: Todo[], action: Action): Todo[] {
  return _todoReducer(state, action);
}

export const todoFeatureKey = 'todos';
