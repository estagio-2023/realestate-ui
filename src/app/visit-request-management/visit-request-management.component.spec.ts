import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitRequestManagementComponent } from './visit-request-management.component';

describe('VisitRequestManagementComponent', () => {
  let component: VisitRequestManagementComponent;
  let fixture: ComponentFixture<VisitRequestManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitRequestManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisitRequestManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
