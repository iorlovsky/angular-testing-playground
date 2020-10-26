import { Boid } from './boid.model';
import { Flock } from './flock.model';

describe('#Flock', () => {
  describe('#getBirdsInsideRadius', () => {
    it('should get boids inside given radius', () => {
      const radius = 50;
      const boid = new Boid(1, { x: 500, y: 500 });
      // tslint:disable:no-magic-numbers
      const boids = [
        new Boid(2, { x: 525, y: 525 }),
        new Boid(3, { x: 525, y: 475 }),
        new Boid(4, { x: 475, y: 525 }),
        new Boid(5, { x: 475, y: 475 }),
        new Boid(6, { x: 600, y: 600 }),
        new Boid(7, { x: 400, y: 400 }),
      ];
      const expectedIds = [2, 3, 4, 5];
      // tslint:enable:no-magic-numbers
      const actualIds = Flock.getBoidsInsideRadius(boid, boids, radius).map(actualBird => actualBird.id);
      expect(actualIds).toEqual(expectedIds);
    });
  });

});
