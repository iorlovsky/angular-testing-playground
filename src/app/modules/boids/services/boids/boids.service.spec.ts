import { TestBed } from '@angular/core/testing';

import { provideMockStore } from '@ngrx/store/testing';

import { BoidsService } from './boids.service';

describe('BoidsService', () => {
  let service: BoidsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore()
      ]
    });
    service = TestBed.inject(BoidsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
