import { Coords } from '../types';
import { isInsideRadius } from '../utils/utils';
import { Bird } from './bird.model';

export class Flock {

  static getCenter(birds: Bird[]): Coords {
    const xSum = birds.reduce<number>((sum, bird) => sum + bird.getCoords().x, 0);
    const ySum = birds.reduce<number>((sum, bird) => sum + bird.getCoords().y, 0);
    return { x: xSum / birds.length, y: ySum / birds.length };
  }

  // static getSafePoint(self: Bird, birdsAround: Bird[], radius: number): Coords {
  //   const birdsInsideRadius = Flock.getBirdsInsideRadius(self, birdsAround, radius)/*.filter(bird => bird.id !== self.id)*/;
  //   return Flock.getCenter(birdsInsideRadius);
  // }

  static getSafePoint(self: Bird, birdsAround: Bird[], radius: number): Coords {
    const birdsInsideRadius = Flock.getBirdsInsideRadius(self, birdsAround, radius).filter(bird => bird.id !== self.id);
    const xSum = birdsInsideRadius.reduce<number>((sum, bird) => sum + bird.getCoords().x - self.getCoords().x, 0);
    const ySum = birdsInsideRadius.reduce<number>((sum, bird) => sum + bird.getCoords().y - self.getCoords().y, 0);
    return { x: xSum /*/ birdsInsideRadius.length*/, y: ySum /*/ birdsInsideRadius.length*/ };
    // return Flock.getCenter(birdsInsideRadius);
  }

  static getBirdsInsideRadius(bird: Bird, birdsAround: Bird[], radius: number): Bird[] {
    return birdsAround.filter((validatableBird) => {
      return isInsideRadius(bird.getCoords(), validatableBird.getCoords(), radius);
    });
  }
}
