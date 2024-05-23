import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgentService } from '../../services/agent.service';
import { AgentModel } from '../../models/agent-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteAgentValidationModalComponent } from '../../modals/delete-agent-validation-modal/delete-agent-validation-modal.component';
import { AgentModalComponent } from '../../modals/agent-modal/agent-modal.component';
import { ToastService } from '../../services/toast.service';
import { ToastClassEnum } from '../../enums/toast-class-enum';
import { agentForm } from '../../../form/form.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agent-view',
  templateUrl: './agent-view.component.html',
  styleUrls: ['./agent-view.component.css']
})
export class AgentViewComponent implements OnInit {
  @Input() name = ''; 
  @Input() phoneNumber = '';
  @Input() email = '';
  agentData$: Observable<AgentModel>;
  agentData: AgentModel = {} as AgentModel;  
  agentId: number;
  form = agentForm;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: AgentService,
    private modalService: NgbModal,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.agentId = params['id'];
      this.loadAgentData();
    });
  }

  loadAgentData(): void {
    this.apiService.getAgentById(this.agentId).subscribe(response => {
      this.agentData = response;
    });
  }

  deleteModal(agentId: number): void {
    const response = this.modalService.open(DeleteAgentValidationModalComponent, {
      keyboard: false
    });
    response.componentInstance.agentId = agentId;
  }

  openEditModal(agentData: AgentModel): void {
    const response = this.modalService.open(AgentModalComponent, {
      keyboard: false
    });
    response.componentInstance.agentData = agentData;

    response.result.then((data) => {
      if (data === 'save') {
        this.editAgent();
      }
    });
  }

  editAgent(): void {
    this.apiService.editAgent(this.agentId, this.form.value).subscribe({
      next: value => {
        this.toastService.show('Agent edited successfully!', ToastClassEnum.success);
        this.form.reset();
        this.loadAgentData();
      },
      error: err => {
        this.toastService.show('Error in editing agent', ToastClassEnum.error);
        console.error(err);
      }
    });
  }
}