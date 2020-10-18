import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BoidsDebugFormService {

  static createForm(): FormGroup {
    return new FormGroup({
      show_grid: new FormControl(null, { updateOn: 'change' }),
    });
  }
}
