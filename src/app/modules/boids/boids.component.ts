import { DOCUMENT } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, QueryList, ViewChildren } from '@angular/core';

import { Animator } from '../../models/animator';
import { randomInteger } from '../../utils/common';
import { BoidComponent } from './components/boid/boid.component';
import { Boid } from './models/boid.model';

@Component({
  selector: 'app-boids',
  templateUrl: './boids.component.html',
  styleUrls: ['./boids.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoidsComponent implements AfterViewInit {

  @ViewChildren(BoidComponent) birdComponents: QueryList<BoidComponent>;
  birds: Boid[];
  private readonly birdsCount: number = 10;
  private readonly fps: number = 60;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
    this.birds = this.generateBirds();
  }

  ngAfterViewInit(): void {
    // Find out whether the performance object works in every browser.
    const animator = new Animator(performance);
    const animationFn = () => {
      this.birdComponents.forEach(bird => bird.start());
    };
    animator.animate(animationFn, this.fps);
  }

  identifyBird(idx: number, bird: Boid): number {
    return bird.id;
  }

  private generateBirds(): Boid[] {
    const getX = () => randomInteger(0, this.document.documentElement.clientWidth - Boid.DIAMETER);
    const getY = () => randomInteger(0, this.document.documentElement.clientHeight - Boid.DIAMETER);
    // tslint:disable-next-line:prefer-array-literal
    return new Array(this.birdsCount)
      .fill(undefined)
      .map((_, index) => new Boid(index, { x: getX(), y: getY() }));
  }
}
