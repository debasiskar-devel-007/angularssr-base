import { TestBed } from '@angular/core/testing';

import { LessionManagementService } from './lession-management.service';

describe('LessionManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LessionManagementService = TestBed.get(LessionManagementService);
    expect(service).toBeTruthy();
  });
});
