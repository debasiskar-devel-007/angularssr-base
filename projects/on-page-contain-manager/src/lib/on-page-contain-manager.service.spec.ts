import { TestBed } from '@angular/core/testing';

import { OnPageContainManagerService } from './on-page-contain-manager.service';

describe('OnPageContainManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnPageContainManagerService = TestBed.get(OnPageContainManagerService);
    expect(service).toBeTruthy();
  });
});
