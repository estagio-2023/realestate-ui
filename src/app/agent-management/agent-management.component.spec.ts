import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentManagementComponent } from './agent-management.component';

describe('AgentManagementComponent', () => {
  let component: AgentManagementComponent;
  let fixture: ComponentFixture<AgentManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});