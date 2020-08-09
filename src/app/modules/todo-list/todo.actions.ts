import { createAction, props } from '@ngrx/store';

import { Todo } from './types';

export enum TodoActionTypes {
  Create = '[Todo Page] Create Todo'
}

export const createTodo = createAction(
  TodoActionTypes.Create,
  props<Todo>()
);
