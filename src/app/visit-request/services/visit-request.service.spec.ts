import { TestBed } from '@angular/core/testing';

import { VisitRequestService } from './visit-request.service';

describe('VisitRequestService', () => {
  let service: VisitRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});