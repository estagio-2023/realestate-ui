import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentModalComponent } from './agent-modal.component';

describe('AgentModalComponent', () => {
  let component: AgentModalComponent;
  let fixture: ComponentFixture<AgentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
