import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceDataModalComponent } from './reference-data-modal.component';

describe('ReferenceDataModalComponent', () => {
  let component: ReferenceDataModalComponent;
  let fixture: ComponentFixture<ReferenceDataModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenceDataModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReferenceDataModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
