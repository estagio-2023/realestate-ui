import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitRequestViewComponent } from './visit-request-details.component';

describe('VisitRequestViewComponent', () => {
  let component: VisitRequestViewComponent;
  let fixture: ComponentFixture<VisitRequestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitRequestViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisitRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
