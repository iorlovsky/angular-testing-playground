import { DOCUMENT } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, OnDestroy, QueryList, ViewChildren } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil, withLatestFrom } from 'rxjs/operators';

import { Animator } from '../../../../models/animator';
import { BoidsState } from '../../boids.reducer';
import { selectIsDebugEnabled } from '../../boids.selectors';
import { BoidComponent } from '../../components/boid/boid.component';
import { Boid } from '../../models/boid.model';
import { Flock } from '../../models/flock.model';
import { BoidsService } from '../../services/boids/boids.service';

@Component({
  selector: 'app-boids',
  templateUrl: './boids.component.html',
  styleUrls: ['./boids.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoidsComponent implements AfterViewInit, OnDestroy {

  @ViewChildren(BoidComponent) birdComponents: QueryList<BoidComponent>;

  readonly flock: Flock;
  readonly isDebugEnabled$: Observable<boolean>;

  private boidsCount: number = 10;
  private readonly fps: number = 60;
  private readonly debugButtonClicks$: Subject<void> = new Subject<void>();
  private readonly destroyed$: Subject<void> = new Subject<void>();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private boidsService: BoidsService,
    private store: Store<{ boids: BoidsState }>
  ) {
    this.isDebugEnabled$ = this.store.select(selectIsDebugEnabled);
    this.flock = new Flock();
    this.flock.setBoidsCount(this.boidsCount);
    const xRange = {
      from: 0,
      to: this.document.documentElement.clientWidth - Boid.DIAMETER
    };
    const yRange = {
      from: 0,
      to: this.document.documentElement.clientHeight - Boid.DIAMETER
    };
    this.flock.generateBoids(xRange, yRange);
    this.listenToDebugButtonClicks();
  }

  ngAfterViewInit(): void {
    // Find out whether the performance object works in every browser.
    const animator = new Animator(performance);
    const animationFn = () => {
      // this.birdComponents.forEach(bird => bird.start());
    };
    animator.animate(animationFn, this.fps);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
    this.debugButtonClicks$.complete();
  }

  identifyBoid(idx: number, boid: Boid): number {
    return boid.id;
  }

  onDebugButtonClick(): void {
    this.debugButtonClicks$.next();
  }

  private listenToDebugButtonClicks(): void {
    this.debugButtonClicks$
      .pipe(
        withLatestFrom(this.isDebugEnabled$),
        map(([, isEnabled]) => isEnabled),
        takeUntil(this.destroyed$)
      )
      .subscribe((isEnabled) => {
        if (isEnabled) {
          this.boidsService.disableDebug();
        } else {
          this.boidsService.enableDebug();
        }
      });
  }
}