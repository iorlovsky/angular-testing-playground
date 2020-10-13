import { Coords } from '../types';

export class Boid {

  constructor(
    readonly id: number,
    private coords: Coords
  ) {
  }

  getCoords(): Coords {
    return this.coords;
  }

  setCoords(coords: Coords): void {
    this.coords = { ...coords };
  }
}
