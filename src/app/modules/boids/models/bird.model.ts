import { Coords } from '../types';

export class Bird {

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
