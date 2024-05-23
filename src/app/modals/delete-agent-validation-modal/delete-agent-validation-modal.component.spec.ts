import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAgentValidationModalComponent } from './delete-agent-validation-modal.component';

describe('DeleteAgentValidationModalComponent', () => {
  let component: DeleteAgentValidationModalComponent;
  let fixture: ComponentFixture<DeleteAgentValidationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteAgentValidationModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteAgentValidationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
