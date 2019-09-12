import { TestBed } from '@angular/core/testing';

import { FromService } from './from.service';

describe('FromService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FromService = TestBed.get(FromService);
    expect(service).toBeTruthy();
  });
});
