import { DOCUMENT } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, QueryList, ViewChildren } from '@angular/core';

import { randomInteger } from '../../utils/common';
import { BirdComponent } from './components/bird/bird.component';
import { Bird } from './models/bird.model';
import { Coords } from './types';

@Component({
  selector: 'app-boids',
  templateUrl: './boids.component.html',
  styleUrls: ['./boids.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoidsComponent implements AfterViewInit {

  @ViewChildren(BirdComponent) birdComponents: QueryList<BirdComponent>;
  birds: Bird[];
  private readonly birdsCount: number = 2;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
    this.birds = this.generateBirds();
  }

  ngAfterViewInit(): void {
    const animate = () => {
      requestAnimationFrame(animate);
      this.birdComponents.forEach(bird => bird.move());
    };
    requestAnimationFrame(animate);
  }

  identifyBird(idx: number, bird: Bird): number {
    return bird.id;
  }

  onCoordsUpdate(id: number, coords: Coords): void {
    const birdToUpdate = this.birds.find(bird => bird.id === id);
    this.birds = this.birds.map((bird) => {
      if (bird.id === birdToUpdate?.id) {
        return new Bird(bird.id, coords);
      }
      return bird;
    });
  }

  private generateBirds(): Bird[] {
    const getX = () => randomInteger(0, this.document.documentElement.clientWidth - BirdComponent.DIAMETER);
    const getY = () => randomInteger(0, this.document.documentElement.clientHeight - BirdComponent.DIAMETER);
    // tslint:disable-next-line:prefer-array-literal
    return new Array(this.birdsCount)
      .fill(undefined)
      .map((_, index) => new Bird(index, { x: getX(), y: getY() }));
  }
}
