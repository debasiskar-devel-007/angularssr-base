import { TestBed } from '@angular/core/testing';

import { DyanmicFormService } from './dyanmic-form.service';

describe('DyanmicFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DyanmicFormService = TestBed.get(DyanmicFormService);
    expect(service).toBeTruthy();
  });
});
