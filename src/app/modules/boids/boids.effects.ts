import { Injectable } from '@angular/core';

import { createEffect, ofType, Actions } from '@ngrx/effects';
import { CreateEffectMetadata } from '@ngrx/effects/src/models';
import { map } from 'rxjs/operators';

import * as BoidsActions from './boids.actions';

@Injectable()
export class BoidsEffects {

  removeDebugArtifacts$: CreateEffectMetadata = createEffect(() => this.actions$.pipe(
    ofType(BoidsActions.disableDebug),
    map(() => BoidsActions.hideGrid())
  ));

  constructor(
    private actions$: Actions,
  ) {
  }
}
