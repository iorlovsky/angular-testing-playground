import { isInsideRadius } from './utils';

describe('#isInsideRadius', () => {
  it('should return true if validatable is in the front of and below the center inside radius', () => {
    const radius = 50;
    const center = { x: 500, y: 500 };
    const validatable = { x: 525, y: 525 };
    expect(isInsideRadius(center, validatable, radius)).toBe(true);
  });

  it('should return true if validatable is in the front of and above the center inside radius', () => {
    const radius = 50;
    const center = { x: 500, y: 500 };
    const validatable = { x: 525, y: 475 };
    expect(isInsideRadius(center, validatable, radius)).toBe(true);
  });

  it('should return true if validatable is behind and below the center inside radius', () => {
    const radius = 50;
    const center = { x: 500, y: 500 };
    const validatable = { x: 475, y: 525 };
    expect(isInsideRadius(center, validatable, radius)).toBe(true);
  });

  it('should return true if validatable is behind and above the center inside radius', () => {
    const radius = 50;
    const center = { x: 500, y: 500 };
    const validatable = { x: 475, y: 475 };
    expect(isInsideRadius(center, validatable, radius)).toBe(true);
  });

  it('should return false if validatable is not in radius by X axis', () => {
    const radius = 50;
    const center = { x: 500, y: 500 };
    const validatable = { x: 600, y: 525 };
    expect(isInsideRadius(center, validatable, radius)).toBe(false);
  });

  it('should return false if validatable is not in radius by Y axis', () => {
    const radius = 50;
    const center = { x: 500, y: 500 };
    const validatable = { x: 500, y: 600 };
    expect(isInsideRadius(center, validatable, radius)).toBe(false);
  });
});
