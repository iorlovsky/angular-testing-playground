import { TestBed } from '@angular/core/testing';

import { BoidsService } from './boids.service';

describe('BoidsService', () => {
  let service: BoidsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoidsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
