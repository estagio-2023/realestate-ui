import { TestBed } from '@angular/core/testing';

import { PropertyManagementApiService } from './property-management-api.service';

describe('PropertyManagementApiService', () => {
  let service: PropertyManagementApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyManagementApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
