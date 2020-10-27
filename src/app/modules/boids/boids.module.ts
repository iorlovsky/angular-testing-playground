import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { BoidsRoutingModule } from './boids-routing.module';
import { BoidsEffects } from './boids.effects';
import * as fromBoids from './boids.reducer';
import { BoidComponent } from './components/boid/boid.component';
import { DebugComponent } from './components/debug/debug.component';
import { GridComponent } from './components/grid/grid.component';
import { BoidsComponent } from './pages/boids/boids.component';

@NgModule({
  declarations: [BoidsComponent, BoidComponent, GridComponent, DebugComponent],
  imports: [
    CommonModule,
    BoidsRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromBoids.boidsFeatureKey, fromBoids.boidsReducer),
    EffectsModule.forFeature([BoidsEffects])
  ]
})
export class BoidsModule {
}
