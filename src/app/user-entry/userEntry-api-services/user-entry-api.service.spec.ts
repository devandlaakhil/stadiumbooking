import { TestBed } from '@angular/core/testing';

import { UserEntryApiService } from './user-entry-api.service';

describe('UserEntryApiService', () => {
  let service: UserEntryApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserEntryApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
