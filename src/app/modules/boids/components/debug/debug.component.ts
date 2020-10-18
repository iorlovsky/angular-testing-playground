import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BoidsDebugFormService } from '../../services/boids-debug-form/boids-debug-form.service';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DebugComponent implements OnInit {
  form: FormGroup;

  ngOnInit(): void {
    this.form = BoidsDebugFormService.createForm();
  }

  onSubmit(): void {
    // Object.values(this.form.controls).forEach(control => control.markAsDirty());
    // this.submitEvent.emit(this.form);
  }

}
