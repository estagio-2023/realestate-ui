import { Component } from '@angular/core';
import { agentForm } from '../../../form/form.service';
import { AgentModel } from '../../models/agent-model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AgentService } from '../../services/agent.service';

@Component({
  selector: 'app-agent-modal',
  templateUrl: './agent-modal.component.html',
  styleUrl: './agent-modal.component.css'
})
export class AgentModalComponent {
  form = agentForm;
  agents: AgentModel[]

  constructor(public activeModal: NgbActiveModal, private apiService: AgentService) {}

  ngOnInit(): void {
    this.apiService.getAllAgentData().subscribe(response => {
      this.agents = response
    });
  }

  closeModal() {
    this.activeModal.close();
    this.form.reset();
  }
}
