import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2, SimpleChanges
} from '@angular/core';

import { Bird } from '../../models/bird.model';
import { Flock } from '../../models/flock.model';
import { Coords } from '../../types';

@Component({
  selector: 'app-bird',
  templateUrl: './bird.component.html',
  styleUrls: ['./bird.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BirdComponent implements OnInit, OnChanges {
  static readonly DIAMETER: number = 30;
  static readonly SPEED: number = 0.05;

  @Input() bird: Bird;
  @Input() birdsAround: Bird[];
  @Output() coordsUpdate: EventEmitter<Coords> = new EventEmitter<Coords>();

  private coords: Coords;
  private target: Coords;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  ngOnInit(): void {
    const { x, y } = this.bird.getCoords();
    this.setCoordsAndChangePosition(x, y);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('birdsAround' in changes) {
      this.target = Flock.getCenter(this.birdsAround);
    }
  }

  move(): void {
    if (this.coords && this.target) {
      this.followTarget();
    }
  }

  private followTarget(): void {
    const { x: currentX, y: currentY } = this.coords;
    const { x: targetX, y: targetY } = this.target;
    const nextX = currentX + (targetX - currentX) * BirdComponent.SPEED;
    const nextY = currentY + (targetY - currentY) * BirdComponent.SPEED;
    this.setCoordsAndChangePosition(nextX, nextY);
  }

  private setCoordsAndChangePosition(x: number, y: number): void {
    this.coords = { x, y };
    this.coordsUpdate.emit(this.coords);
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'transform',
      `translate(${this.coords.x}px, ${this.coords.y}px)`
    );
  }
}
