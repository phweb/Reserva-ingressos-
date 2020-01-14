import { TestBed } from '@angular/core/testing';

import { MoviesService } from './moviedb.service';

describe('MoviedbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesService = TestBed.get(MoviesService);
    expect(service).toBeTruthy();
  });
});
