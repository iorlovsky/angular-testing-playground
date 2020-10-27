import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { disableDebug, enableDebug, hideGrid, showGrid } from '../../boids.actions';
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

  showGrid(): void {
    this.store.dispatch(showGrid());
  }

  hideGrid(): void {
    this.store.dispatch(hideGrid());
  }
}
