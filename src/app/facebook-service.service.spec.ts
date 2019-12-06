import { TestBed } from '@angular/core/testing';

import { FacebookServiceService } from './facebook-service.service';

describe('FacebookServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacebookServiceService = TestBed.get(FacebookServiceService);
    expect(service).toBeTruthy();
  });
});
