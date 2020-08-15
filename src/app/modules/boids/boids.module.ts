import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BoidsRoutingModule } from './boids-routing.module';
import { BoidsComponent } from './boids.component';
import { BirdComponent } from './components/bird/bird.component';

@NgModule({
  declarations: [BoidsComponent, BirdComponent],
  imports: [
    CommonModule,
    BoidsRoutingModule
  ]
})
export class BoidsModule { }
