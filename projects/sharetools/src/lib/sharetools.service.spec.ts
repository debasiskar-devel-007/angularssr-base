import { TestBed } from '@angular/core/testing';

import { SharetoolsService } from './sharetools.service';

describe('SharetoolsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharetoolsService = TestBed.get(SharetoolsService);
    expect(service).toBeTruthy();
  });
});
