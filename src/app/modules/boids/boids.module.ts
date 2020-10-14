import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { BoidsRoutingModule } from './boids-routing.module';
import { BoidsComponent } from './boids.component';
import * as fromBoids from './boids.reducer';
import { BoidComponent } from './components/boid/boid.component';
import { GridComponent } from './components/grid/grid.component';

@NgModule({
  declarations: [BoidsComponent, BoidComponent, GridComponent],
  imports: [
    CommonModule,
    BoidsRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromBoids.boidsFeatureKey, fromBoids.boidsReducer)
  ]
})
export class BoidsModule {
}
