import { Coords } from '../types';

export class Boid {
  private target: Coords;

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

  getTarget(): Coords {
    return this.target;
  }

  setTarget(coords: Coords): void {
    this.target = coords;
  }

  hasTarget(): boolean {
    return !!this.target;
  }
}
