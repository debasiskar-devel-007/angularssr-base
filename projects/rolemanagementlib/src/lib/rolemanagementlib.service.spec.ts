import { TestBed } from '@angular/core/testing';

import { RolemanagementlibService } from './rolemanagementlib.service';

describe('RolemanagementlibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RolemanagementlibService = TestBed.get(RolemanagementlibService);
    expect(service).toBeTruthy();
  });
});
