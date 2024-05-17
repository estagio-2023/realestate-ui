import { Component } from '@angular/core';
import { agentForm } from '../../../form/form.service';
import { AgentModel } from '../../models/agent-model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AgentService } from '../../services/agent.service';
import { ToastClassEnum } from '../../enums/toast-class-enum';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-agent-modal',
  templateUrl: './agent-modal.component.html',
  styleUrl: './agent-modal.component.css'
})
export class AgentModalComponent {
  form = agentForm;
  agents: AgentModel[]

  constructor(public activeModal: NgbActiveModal, private apiService: AgentService, private toastService: ToastService) {}

  ngOnInit(): void {
    this.apiService.getAllAgentData().subscribe(response => {
      this.agents = response
    });
  }

  closeModal(result: any) {
    this.activeModal.close();
    this.form.reset();
  }

  addAgentData() {
    this.apiService.addAgentData(this.form.value).subscribe({
      next: value => {
        this.toastService.show("Agent added successfully!",
          ToastClassEnum.success);
          this.closeModal(value);
      },
      error: err =>
        this.toastService.show("Error in adding agents", ToastClassEnum.error)
    });
  }
}
