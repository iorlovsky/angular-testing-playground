export function randomInteger(min: number, max: number): number {
  // tslint:disable-next-line:no-magic-numbers
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
