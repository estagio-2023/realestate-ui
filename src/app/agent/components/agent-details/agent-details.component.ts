import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from '../../services/agent.service';
import { AgentModel } from '../../../common/models/agent-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteValidationModalComponent } from '../../../common/modals/delete-validation-modal/delete-validation-modal.component';
import { AgentModalComponent } from '../../modals/agent-modal/agent-modal.component';
import { ToastService } from '../../../common/services/toast-service/toast.service';
import { ToastClassEnum } from '../../../common/enums/toast-class-enum';
import { agentForm } from '../../../common/services/form/form.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
})
export class AgentDetailsComponent implements OnInit {
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
    private toastService: ToastService,
    private router: Router
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

  openDeleteModal(agentId: number): void {
    const modalRef = this.modalService.open(DeleteValidationModalComponent, {
      keyboard: false,
      animation: false
    });

    modalRef.result.then(resp => {
      if(resp === 'confirm')
      {
        this.deleteAgent(agentId)
      }
    })
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

  deleteAgent(agentId: number)
  {
      this.apiService.deleteAgent(agentId).subscribe({
        next: value => {
          this.toastService.show("Agent successfully deleted", ToastClassEnum.success)
          this.router.navigate(['/agent'])
        },
        error: err =>
          this.toastService.show("Error while trying to delete agent", ToastClassEnum.error),
      })
    
  }
}