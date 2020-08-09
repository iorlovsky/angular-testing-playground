import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class TodoFormService {

  constructor() {
  }

  static getCreateTodoForm(): FormGroup {
    return new FormGroup({
      title: new FormControl(null, { validators: [Validators.required], updateOn: 'blur' }),
      description: new FormControl(null, { validators: [Validators.required], updateOn: 'blur' }),
    });
  }
}
