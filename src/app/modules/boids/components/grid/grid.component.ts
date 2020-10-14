import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

import { fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

import { range } from '../../../../utils/common';
import { Coords } from '../../types';

type Lines = {
  vertical: Coords[],
  horizontal: Coords[]
};

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit, OnDestroy, OnChanges {
  @Input() step: number = 100;

  lines: Lines;

  private readonly destroyed$: Subject<void> = new Subject<void>();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private changeDetector: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.lines = this.generateLines();
    this.listenToResize();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('step' in changes) {
      this.lines = this.generateLines();
    }
  }

  private listenToResize(): void {
    fromEvent(window, 'resize')
      .pipe(
        // tslint:disable-next-line:no-magic-numbers
        debounceTime(200),
        takeUntil(this.destroyed$)
      )
      .subscribe(() => {
        this.lines = this.generateLines();
        this.changeDetector.markForCheck();
      });
  }

  private generateLines(): Lines {
    const xRestriction = this.document.documentElement.clientWidth;
    const yRestriction = this.document.documentElement.clientHeight;
    const vertical: Coords[] = range(0, xRestriction, this.step).map(x => ({ x, y: yRestriction }));
    // tslint:disable-next-line:object-shorthand-properties-first
    const horizontal: Coords[] = range(0, yRestriction, this.step).map(y => ({ x: xRestriction, y }));
    return { vertical, horizontal };
  }

}
