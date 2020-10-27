import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BoidsDebugFormService } from '../../services/boids-debug-form/boids-debug-form.service';
import { BoidsService } from '../../services/boids/boids.service';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DebugComponent implements OnInit, OnDestroy {
  form: FormGroup;

  private readonly destroyed$: Subject<void> = new Subject<void>();

  constructor(
    private boidsService: BoidsService
  ) {
  }

  ngOnInit(): void {
    this.form = BoidsDebugFormService.createForm();
    this.listenToShowGrid();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private listenToShowGrid(): void {
    this.form.get('show_grid')
      ?.valueChanges
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe((shouldShow) => {
        shouldShow ? this.boidsService.showGrid() : this.boidsService.hideGrid();
      });
  }

}
