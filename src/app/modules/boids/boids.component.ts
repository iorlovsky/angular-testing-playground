import { DOCUMENT } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, QueryList, ViewChildren } from '@angular/core';

import { Animator } from '../../models/animator';
import { BoidComponent } from './components/boid/boid.component';
import { Boid } from './models/boid.model';
import { Flock } from './models/flock.model';

@Component({
  selector: 'app-boids',
  templateUrl: './boids.component.html',
  styleUrls: ['./boids.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoidsComponent implements AfterViewInit {

  @ViewChildren(BoidComponent) birdComponents: QueryList<BoidComponent>;

  readonly flock: Flock;

  private boidsCount: number = 10;
  private readonly fps: number = 60;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
    this.flock = new Flock();
    this.flock.setBoidsCount(this.boidsCount);
    const xRange = {
      from: 0,
      to: this.document.documentElement.clientWidth - Boid.DIAMETER
    };
    const yRange = {
      from: 0,
      to: this.document.documentElement.clientHeight - Boid.DIAMETER
    };
    this.flock.generateBoids(xRange, yRange);
  }

  ngAfterViewInit(): void {
    // Find out whether the performance object works in every browser.
    const animator = new Animator(performance);
    const animationFn = () => {
      // this.birdComponents.forEach(bird => bird.start());
    };
    animator.animate(animationFn, this.fps);
  }

  identifyBoid(idx: number, boid: Boid): number {
    return boid.id;
  }
}
