import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { disableDebug, enableDebug } from '../../boids.actions';
import { BoidsState } from '../../boids.reducer';

@Injectable({
  providedIn: 'root'
})
export class BoidsService {

  constructor(
    private store: Store<{ boids: BoidsState}>
  ) { }

  enableDebug(): void {
    this.store.dispatch(enableDebug());
  }

  disableDebug(): void {
    this.store.dispatch(disableDebug());
  }
}
