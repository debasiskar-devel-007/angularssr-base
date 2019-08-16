import { TestBed } from '@angular/core/testing';

import { CalenderManageLibService } from './calender-manage-lib.service';

describe('CalenderManageLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalenderManageLibService = TestBed.get(CalenderManageLibService);
    expect(service).toBeTruthy();
  });
});
