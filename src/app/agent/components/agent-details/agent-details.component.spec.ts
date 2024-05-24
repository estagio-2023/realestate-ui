import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentDetailsComponent } from './agent-details.component';

describe('AgentViewComponent', () => {
  let component: AgentDetailsComponent;
  let fixture: ComponentFixture<AgentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});