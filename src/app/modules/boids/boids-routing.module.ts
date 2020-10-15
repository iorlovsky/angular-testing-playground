import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoidsComponent } from './pages/boids/boids.component';

const routes: Routes = [{ path: '', component: BoidsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoidsRoutingModule { }
