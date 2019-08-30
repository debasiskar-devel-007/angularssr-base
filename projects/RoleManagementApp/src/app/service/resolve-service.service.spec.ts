import { TestBed } from '@angular/core/testing';

import { ResolveServiceService } from './resolve-service.service';

describe('ResolveServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolveServiceService = TestBed.get(ResolveServiceService);
    expect(service).toBeTruthy();
  });
});
