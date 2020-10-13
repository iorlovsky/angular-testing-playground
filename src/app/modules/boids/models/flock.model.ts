import { randomInteger } from '../../../utils/common';
import { Coords } from '../types';
import { isInsideRadius } from '../utils/utils';
import { Boid } from './boid.model';

type CoordinateRange = {
  from: number,
  to: number
};

export class Flock {
  boids: Boid[] = [];
  private boidsCount: number;

  static getCenter(birds: Boid[]): Coords {
    const xSum = birds.reduce<number>((sum, bird) => sum + bird.getCoords().x, 0);
    const ySum = birds.reduce<number>((sum, bird) => sum + bird.getCoords().y, 0);
    return { x: xSum / birds.length, y: ySum / birds.length };
  }

  // static getSafePoint(self: Bird, birdsAround: Bird[], radius: number): Coords {
  //   const birdsInsideRadius = Flock.getBirdsInsideRadius(self, birdsAround, radius)/*.filter(bird => bird.id !== self.id)*/;
  //   return Flock.getCenter(birdsInsideRadius);
  // }

  static getSafePoint(self: Boid, birdsAround: Boid[], radius: number): Coords {
    const birdsInsideRadius = Flock.getBirdsInsideRadius(self, birdsAround, radius).filter(bird => bird.id !== self.id);
    const xSum = birdsInsideRadius.reduce<number>((sum, bird) => sum + bird.getCoords().x - self.getCoords().x, 0);
    const ySum = birdsInsideRadius.reduce<number>((sum, bird) => sum + bird.getCoords().y - self.getCoords().y, 0);
    return { x: xSum /*/ birdsInsideRadius.length*/, y: ySum /*/ birdsInsideRadius.length*/ };
    // return Flock.getCenter(birdsInsideRadius);
  }

  static getBirdsInsideRadius(bird: Boid, birdsAround: Boid[], radius: number): Boid[] {
    return birdsAround.filter((validatableBird) => {
      return isInsideRadius(bird.getCoords(), validatableBird.getCoords(), radius);
    });
  }

  setBoidsCount(count: number): void {
    this.boidsCount = count;
  }

  generateBoids(xRange: CoordinateRange, yRange: CoordinateRange): void {
    const getX = () => randomInteger(xRange.from, xRange.to);
    const getY = () => randomInteger(yRange.from, yRange.to);
    // tslint:disable-next-line:prefer-array-literal
    this.boids = new Array(this.boidsCount)
      .fill(undefined)
      .map((_, index) => new Boid(index, { x: getX(), y: getY() }));
  }
}
