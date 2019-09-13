import { TestBed } from '@angular/core/testing';

import { MyteamService } from './myteam.service';

describe('MyteamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyteamService = TestBed.get(MyteamService);
    expect(service).toBeTruthy();
  });
});
