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

  static getCenter(boids: Boid[]): Coords {
    const xSum = boids.reduce<number>((sum, boid) => sum + boid.getCoords().x, 0);
    const ySum = boids.reduce<number>((sum, boid) => sum + boid.getCoords().y, 0);
    return { x: xSum / boids.length, y: ySum / boids.length };
  }

  // static getSafePoint(self: Boid, boidsAround: Boid[], radius: number): Coords {
  //   const boidsInsideRadius = Flock.getBirdsInsideRadius(self, boidsAround, radius)/*.filter(boid => boid.id !== self.id)*/;
  //   return Flock.getCenter(boidsInsideRadius);
  // }

  static getSafePoint(self: Boid, boidsAround: Boid[], radius: number): Coords {
    const boidsInsideRadius = Flock.getBoidsInsideRadius(self, boidsAround, radius).filter(boid => boid.id !== self.id);
    const xSum = boidsInsideRadius.reduce<number>((sum, boid) => sum + boid.getCoords().x - self.getCoords().x, 0);
    const ySum = boidsInsideRadius.reduce<number>((sum, boid) => sum + boid.getCoords().y - self.getCoords().y, 0);
    return { x: xSum /*/ boidsInsideRadius.length*/, y: ySum /*/ boidsInsideRadius.length*/ };
    // return Flock.getCenter(boidsInsideRadius);
  }

  static getBoidsInsideRadius(boid: Boid, boidsAround: Boid[], radius: number): Boid[] {
    return boidsAround.filter((validatableBird) => {
      return isInsideRadius(boid.getCoords(), validatableBird.getCoords(), radius);
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
