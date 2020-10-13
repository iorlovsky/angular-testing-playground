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

@Component({
  selector: 'app-boid',
  templateUrl: './boid.component.html',
  styleUrls: ['./boid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoidComponent implements OnInit, OnChanges {
  @Input() boid: Boid;
  @Input() birdsAround: Boid[];

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  ngOnInit(): void {
    this.updatePosition(this.boid.getCoords());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('birdsAround' in changes) {
      const target = Flock.getCenter(this.birdsAround);
      const safePoint = Flock.getSafePoint(this.boid, this.birdsAround, Boid.SAFE_DISTANCE);
      this.boid.setTarget(target);
      this.boid.setSafePoint(safePoint);
    }
  }

  start(): void {
    if (this.boid.hasTarget()) {
      this.move();
    }
  }

  private move(): void {
    this.boid.move();
    this.updatePosition(this.boid.getCoords());
  }

  private updatePosition({ x, y }: Coords): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'transform',
      `translate(${x}px, ${y}px)`
    );
  }
}
