export function randomInteger(min: number, max: number): number {
  // tslint:disable-next-line:no-magic-numbers
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

export function range(start: number, stop: number = start, step: number = 1): number[] {
  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
    return [];
  }
  const result = [];
  for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
    result.push(i);
  }
  return result;
}
