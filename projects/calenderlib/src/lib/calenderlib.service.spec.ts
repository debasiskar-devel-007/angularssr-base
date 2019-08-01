import { TestBed } from '@angular/core/testing';

import { CalenderlibService } from './calenderlib.service';

describe('CalenderlibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalenderlibService = TestBed.get(CalenderlibService);
    expect(service).toBeTruthy();
  });
});
