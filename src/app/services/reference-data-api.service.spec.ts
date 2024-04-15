import { TestBed } from '@angular/core/testing';

import { ReferenceDataApiService } from './reference-data-api.service';

describe('ReferenceDataApiService', () => {
  let service: ReferenceDataApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReferenceDataApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});