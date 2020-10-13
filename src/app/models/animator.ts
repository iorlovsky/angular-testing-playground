import { DateLike } from '../interfaces/date-like';

/**
 * Class encapsulating any animation logic.
 */
export class Animator {

  constructor(
    private timeScheduler: DateLike
  ) {
  }

  /**
   * Animate given function with given FPS using requestAnimationFrame.
   * @param animationFn. The function to animate.
   * @param fps. The FPS count to animate with.
   * TODO: consider returning an Animation object which has a method to stop animation.
   */
  // tslint:disable-next-line:no-any
  animate(animationFn: () => any, fps: number): void {
    // tslint:disable-next-line:no-magic-numbers
    const fpsDuration = 1000 / fps;
    let lastAnimationTime = this.timeScheduler.now();
    const animate = (timestamp: number) => {
      requestAnimationFrame(animate);
      const elapsedTime = timestamp - lastAnimationTime;
      if (elapsedTime <= fpsDuration) {
        return;
      }
      animationFn();
      lastAnimationTime = timestamp - (elapsedTime % fpsDuration);
    };
    requestAnimationFrame(animate);
  }
}
