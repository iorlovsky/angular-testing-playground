import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Renderer2, SimpleChanges
} from '@angular/core';

import { Boid } from '../../models/boid.model';
import { Flock } from '../../models/flock.model';
import { Coords } from '../../types';
import { correctVelocity, isInsideRadius } from '../../utils/utils';

@Component({
  selector: 'app-boid',
  templateUrl: './boid.component.html',
  styleUrls: ['./boid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoidComponent implements OnInit, OnChanges {
  static readonly DIAMETER: number = 30;
  static readonly SPEED: number = 5;
  static readonly SAFE_DISTANCE: number = 50;

  @Input() boid: Boid;
  @Input() birdsAround: Boid[];

  private safePoint: Coords;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  ngOnInit(): void {
    const { x, y } = this.boid.getCoords();
    this.setCoordsAndChangePosition(x, y);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('birdsAround' in changes) {
      this.boid.setTarget(Flock.getCenter(this.birdsAround));
      this.safePoint = Flock.getSafePoint(this.boid, this.birdsAround, BoidComponent.SAFE_DISTANCE);
    }
  }

  start(): void {
    if (this.boid.hasTarget()) {
      this.move();
    }
  }

  private move(): void {
    const coherence = this.getPositionForCoherence();
    const separation = this.getPositionForSeparation();

    const { x: nextX, y: nextY } = this.combineRules(coherence, separation);
    this.setCoordsAndChangePosition(nextX, nextY);
  }

  private getPositionForCoherence(): Coords {
    const { x: targetX, y: targetY } = this.boid.getTarget();
    const { x: currentX, y: currentY } = this.boid.getCoords();
    let unsignedNextX = 0;
    let unsignedNextY = 0;
    const isInTargetArea = isInsideRadius(this.boid.getTarget(), this.boid.getCoords(), BoidComponent.SPEED);
    if (isInTargetArea) {
      return { x: targetX - currentX, y: targetY - currentY };
    }
    if (Math.abs((targetY - currentY) / (targetX - currentX)) < 1) {
      unsignedNextX = BoidComponent.SPEED;
      unsignedNextY = BoidComponent.SPEED * correctVelocity(this.boid.getCoords(), this.boid.getTarget(), 'y');
    } else {
      unsignedNextX = BoidComponent.SPEED * correctVelocity(this.boid.getCoords(), this.boid.getTarget(), 'x');
      unsignedNextY = BoidComponent.SPEED;
    }
    const nextX = unsignedNextX * (currentX <= targetX  ? 1 : -1);
    const nextY = unsignedNextY * (currentY <= targetY ? 1 : -1);
    return { x: nextX, y: nextY };
  }

  private getPositionForSeparation(): Coords {
    // const { x: currentX, y: currentY } = this.coords;
    // const { x: targetX, y: targetY } = this.safePoint;
    // const nextX = (targetX - currentX) * BirdComponent.SPEED;
    // const nextY = (targetY - currentY) * BirdComponent.SPEED;
    // return { x: nextX, y: nextY };
    return { x: this.safePoint.x * BoidComponent.SPEED, y: this.safePoint.y * BoidComponent.SPEED };
  }

  private combineRules(coherence: Coords, separation: Coords): Coords {
    const { x: currentX, y: currentY } = this.boid.getCoords();
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

  private shouldMoveToSafePoint(): boolean {
    return !isNaN(this.safePoint.x) && !isNaN(this.safePoint.y);
  }

  private setCoordsAndChangePosition(x: number, y: number): void {
    this.boid.setCoords({ x, y });
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'transform',
      `translate(${x}px, ${y}px)`
    );
  }
}
