import { TestBed } from '@angular/core/testing';

import { AutoShareService } from './auto-share.service';

describe('AutoShareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutoShareService = TestBed.get(AutoShareService);
    expect(service).toBeTruthy();
  });
});
