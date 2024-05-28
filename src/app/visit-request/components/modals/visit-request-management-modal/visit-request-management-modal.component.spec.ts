import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitRequestManagementModalComponent } from './visit-request-management-modal.component';

describe('VisitRequestManagementModalComponent', () => {
  let component: VisitRequestManagementModalComponent;
  let fixture: ComponentFixture<VisitRequestManagementModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitRequestManagementModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisitRequestManagementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
