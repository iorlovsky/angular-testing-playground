import { Coords } from '../types';
import { correctVelocity, isInsideRadius } from '../utils/utils';

/**
 * Boid implementation.
 */
export class Boid {
  /**
   * Boid diameter.
   */
  static readonly DIAMETER: number = 30;

  /**
   * Distance to keep from other boids.
   */
  static readonly SAFE_DISTANCE: number = 50;

  /**
   * Flock mass center according to the first rule.
   */
  private target: Coords;

  /**
   * Count of pixels to go per animation step.
   */
  private speed: number = 5;

  private safePoint: Coords;

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

  /**
   * Whether the boid has a target.
   */
  hasTarget(): boolean {
    return !!this.target;
  }

  setSafePoint(coords: Coords): void {
    this.safePoint = coords;
  }

  /**
   * Calculate next position based on the rules.
   */
  move(): void {
    const coherence = this.getPositionForCoherence();
    const separation = this.getPositionForSeparation();

    const newCoords = this.combineRules(coherence, separation);
    this.setCoords(newCoords);
  }

  /**
   * Calculate next coords according to the Coherence rule.
   */
  private getPositionForCoherence(): Coords {
    const { x: targetX, y: targetY } = this.target;
    const { x: currentX, y: currentY } = this.coords;
    let unsignedNextX = 0;
    let unsignedNextY = 0;
    const isInTargetArea = isInsideRadius(this.target, this.coords, this.speed);
    if (isInTargetArea) {
      return { x: targetX - currentX, y: targetY - currentY };
    }
    if (Math.abs((targetY - currentY) / (targetX - currentX)) < 1) {
      unsignedNextX = this.speed;
      unsignedNextY = this.speed * correctVelocity(this.coords, this.target, 'y');
    } else {
      unsignedNextX = this.speed * correctVelocity(this.coords, this.target, 'x');
      unsignedNextY = this.speed;
    }
    const nextX = unsignedNextX * (currentX <= targetX  ? 1 : -1);
    const nextY = unsignedNextY * (currentY <= targetY ? 1 : -1);
    return { x: nextX, y: nextY };
  }

  /**
   * Calculate next coords according to the Separation rule.
   */
  private getPositionForSeparation(): Coords {
    // const { x: currentX, y: currentY } = this.coords;
    // const { x: targetX, y: targetY } = this.safePoint;
    // const nextX = (targetX - currentX) * BirdComponent.SPEED;
    // const nextY = (targetY - currentY) * BirdComponent.SPEED;
    // return { x: nextX, y: nextY };
    return { x: this.safePoint.x * this.speed, y: this.safePoint.y * this.speed };
  }

  /**
   * Calculate next coords based on the given rules.
   * @param coherence. The next coords according to the Coherence rule.
   * @param separation. The next coords according to the Separation rule.
   */
  private combineRules(coherence: Coords, separation: Coords): Coords {
    const { x: currentX, y: currentY } = this.coords;
    // tslint:disable:prefer-const
    let nextX = currentX + coherence.x;
    let nextY = currentY + coherence.y;
    // tslint:enable:prefer-const
    // if (this.shouldMoveToSafePoint()) {
    //   nextX -= separation.x;
    //   nextY -= separation.y;
    // }
    return { x: nextX, y: nextY };
  }
}
