import { TestBed } from '@angular/core/testing';

import { ResourcelibService } from './resourcelib.service';

describe('ResourcelibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResourcelibService = TestBed.get(ResourcelibService);
    expect(service).toBeTruthy();
  });
});
