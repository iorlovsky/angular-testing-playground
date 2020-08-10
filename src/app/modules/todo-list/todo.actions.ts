import { createAction, props } from '@ngrx/store';

import { Todo } from './types';

export const createTodo = createAction(
  '[Todo Page] Create Todo',
  props<Todo>()
);
