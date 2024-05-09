import { TestBed } from '@angular/core/testing';

import { RealEstateManagementApiService } from './real-estate-management-api.service';

describe('RealEstateManagementApiService', () => {
  let service: RealEstateManagementApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealEstateManagementApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
