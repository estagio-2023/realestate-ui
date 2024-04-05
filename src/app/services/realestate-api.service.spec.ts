import { TestBed } from '@angular/core/testing';

import { RealestateApiService } from './realestate-api.service';

describe('RealestateApiService', () => {
  let service: RealestateApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealestateApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
