import { Component } from '@angular/core';
import { AgentModel } from '../models/agent-model';
import { AgentService } from '../services/agent.service';
import { AgentModalComponent } from '../modals/agent-modal/agent-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteAgentValidationModalComponent } from '../modals/delete-agent-validation-modal/delete-agent-validation-modal.component';

@Component({
  selector: 'app-agent-management',
  templateUrl: './agent-management.component.html',
  styleUrl: './agent-management.component.css'
})
export class AgentManagementComponent {
  agents: AgentModel[]

  constructor(private apiService: AgentService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadAgentData()
  }

  loadAgentData(){
    this.apiService.getAllAgentData().subscribe(response => {
      this.agents = response
    })
  }

  openAddAgentModal() {
    var response = this.modalService.open(AgentModalComponent, {
      keyboard: false
    });

    response.result.then((data) => {
      if (data != null) {
        this.loadAgentData();
      }
    }
    )
  }
}
