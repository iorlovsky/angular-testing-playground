import { Coords } from '../types';

export function isInsideRadiusByX(center: Coords, x: number, radius: number): boolean {
  return x > center.x - radius && x < center.x + radius;
}

export function isInsideRadiusByY(center: Coords, y: number, radius: number): boolean {
  return y > center.y - radius && y < center.y + radius;
}

export function isInsideRadius(center: Coords, validatable: Coords, radius: number): boolean {
  return isInsideRadiusByX(center, validatable.x, radius) && isInsideRadiusByY(center, validatable.y, radius);
}

/**
 * Adjust velocity of movement to target along given axis relative to the another axis.
 *
 * @example
 * const current = { x: 0, y: 0 };
 * const target = { x: 1000, y: 500 };
 * // Velocity is 0.5
 * const velocity = correctVelocity(current, target, 'y');
 *
 * @example
 * const current = { x: 0, y: 0 };
 * const target = { x: 1000, y: 500 };
 * // Velocity is 2
 * const velocity = correctVelocity(current, target, 'x');
 *
 * @example
 * const current = { x: 100, y: 50 };
 * const target = { x: 1000, y: 500 };
 * // Velocity is 0.5
 * const velocity = correctVelocity(current, target, 'y');
 * @param currentCoords
 * @param targetCoords
 * @param axis
 */
export function correctVelocity(currentCoords: Coords, targetCoords: Coords, axis: 'x' | 'y'): number {
  const { x: currentX, y: currentY } = currentCoords;
  const { x: targetX, y: targetY } = targetCoords;
  const targetYCompensated = targetY - currentY;
  const targetXCompensated = targetX - currentX;
  if (axis === 'x') {
    return Math.abs(targetXCompensated / targetYCompensated);
  }
  return Math.abs(targetYCompensated / targetXCompensated);
}
