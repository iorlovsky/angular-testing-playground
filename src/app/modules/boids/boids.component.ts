import { DOCUMENT } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, QueryList, ViewChildren } from '@angular/core';

import { randomInteger } from '../../utils/common';
import { BoidComponent } from './components/boid/boid.component';
import { Boid } from './models/boid.model';
import { Coords } from './types';

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
  private readonly fpsTime: number;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
    // tslint:disable-next-line:no-magic-numbers
    this.fpsTime = 1000 / this.fps;
    this.birds = this.generateBirds();
  }

  ngAfterViewInit(): void {
    let lastAnimationTime = performance.now();
    const animate = (timestamp: number) => {
      requestAnimationFrame(animate);
      const elapsedTime = timestamp - lastAnimationTime;
      if (elapsedTime <= this.fpsTime) {
        return;
      }
      this.birdComponents.forEach(bird => bird.start());
      lastAnimationTime = timestamp - (elapsedTime % this.fpsTime);
    };
    requestAnimationFrame(animate);
  }

  identifyBird(idx: number, bird: Boid): number {
    return bird.id;
  }

  onCoordsUpdate(id: number, coords: Coords): void {
    const birdToUpdate = this.birds.find(bird => bird.id === id);
    this.birds = this.birds.map((bird) => {
      if (bird.id === birdToUpdate?.id) {
        return new Boid(bird.id, coords);
      }
      return bird;
    });
  }

  private generateBirds(): Boid[] {
    const getX = () => randomInteger(0, this.document.documentElement.clientWidth - BoidComponent.DIAMETER);
    const getY = () => randomInteger(0, this.document.documentElement.clientHeight - BoidComponent.DIAMETER);
    // tslint:disable-next-line:prefer-array-literal
    return new Array(this.birdsCount)
      .fill(undefined)
      .map((_, index) => new Boid(index, { x: getX(), y: getY() }));
  }
}
