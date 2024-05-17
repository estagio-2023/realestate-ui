import { Component } from '@angular/core';
import { AgentModel } from '../models/agent-model';
import { AgentService } from '../services/agent.service';

@Component({
  selector: 'app-agent-management',
  templateUrl: './agent-management.component.html',
  styleUrl: './agent-management.component.css'
})
export class AgentManagementComponent {
  agents: AgentModel[]

  constructor(private apiService: AgentService) { }

  ngOnInit(): void {
    this.loadAgentData()
  }

  loadAgentData(){
    this.apiService.getAllAgentData().subscribe(response => {
      this.agents = response
    })
  }
}
