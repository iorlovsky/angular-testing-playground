import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BoidsRoutingModule } from './boids-routing.module';
import { BoidsComponent } from './boids.component';
import { BirdComponent } from './components/bird/bird.component';

@NgModule({
  declarations: [BoidsComponent, BirdComponent],
  imports: [
    CommonModule,
    BoidsRoutingModule,
    SharedModule
  ]
})
export class BoidsModule {
}
