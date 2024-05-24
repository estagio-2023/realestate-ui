import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitRequestDetailsComponent } from './visit-request-details.component';

describe('VisitRequestViewComponent', () => {
  let component: VisitRequestDetailsComponent;
  let fixture: ComponentFixture<VisitRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitRequestDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisitRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
