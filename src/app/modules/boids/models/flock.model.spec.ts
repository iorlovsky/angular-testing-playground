import { Bird } from './bird.model';
import { Flock } from './flock.model';

describe('#Flock', () => {
  describe('#getBirdsInsideRadius', () => {
    it('should get birds inside given radius', () => {
      const radius = 50;
      const bird = new Bird(1, { x: 500, y: 500 });
      // tslint:disable:no-magic-numbers
      const birds = [
        new Bird(2, { x: 525, y: 525 }),
        new Bird(3, { x: 525, y: 475 }),
        new Bird(4, { x: 475, y: 525 }),
        new Bird(5, { x: 475, y: 475 }),
        new Bird(6, { x: 600, y: 600 }),
        new Bird(7, { x: 400, y: 400 }),
      ];
      const expectedIds = [2, 3, 4, 5];
      // tslint:enable:no-magic-numbers
      const actualIds = Flock.getBirdsInsideRadius(bird, birds, radius).map(actualBird => actualBird.id);
      expect(actualIds).toEqual(expectedIds);
    });
  });

});
