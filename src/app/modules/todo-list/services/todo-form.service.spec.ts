import { TestBed } from '@angular/core/testing';

import { TodoFormService } from './todo-form.service';

describe('TodoFormService', () => {
  let service: TodoFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoFormService
      ]
    });
    service = TestBed.inject(TodoFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
