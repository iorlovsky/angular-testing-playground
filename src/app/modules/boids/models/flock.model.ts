import { Coords } from '../types';
import { Bird } from './bird.model';

export class Flock {

  static getCenter(birds: Bird[]): Coords {
    const xSum = birds.reduce<number>((sum, bird) => sum + bird.getCoords().x, 0);
    const ySum = birds.reduce<number>((sum, bird) => sum + bird.getCoords().y, 0);
    return { x: xSum / birds.length, y: ySum / birds.length };
  }
}
