import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BoidsRoutingModule } from './boids-routing.module';
import { BoidsComponent } from './boids.component';

@NgModule({
  declarations: [BoidsComponent],
  imports: [
    CommonModule,
    BoidsRoutingModule
  ]
})
export class BoidsModule { }
