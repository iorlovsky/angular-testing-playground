import { TestBed } from '@angular/core/testing';

import { BoidsDebugFormService } from './boids-debug-form.service';

describe('BoidsDebugFormService', () => {
  let service: BoidsDebugFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoidsDebugFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
