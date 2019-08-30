import { TestBed } from '@angular/core/testing';

import { FormmanagerlibService } from './formmanagerlib.service';

describe('FormmanagerlibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormmanagerlibService = TestBed.get(FormmanagerlibService);
    expect(service).toBeTruthy();
  });
});
