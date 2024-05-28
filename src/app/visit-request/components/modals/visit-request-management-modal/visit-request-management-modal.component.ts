import { Component } from '@angular/core';
import { visitRequestForm } from '../../../../common/services/form/form.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AgentModel } from '../../../../common/models/agent-model';
import { AgentService } from '../../../../agent/services/agent.service';
import { VisitRequestService } from '../../../services/visit-request.service';
import { ToastService } from '../../../../common/services/toast-service/toast.service';
import { ToastClassEnum } from '../../../../common/enums/toast-class-enum';

@Component({
  selector: 'app-visit-request-management-modal',
  templateUrl: './visit-request-management-modal.component.html',
  styleUrl: './visit-request-management-modal.component.css'
})

export class VisitRequestManagementModalComponent {
  form = visitRequestForm
  minDate: string
  agents : AgentModel[]
  times: string[] = []
  startTime: string = ''
  endTime: string = ''
  
  constructor(public activeModal: NgbActiveModal,private agentService: AgentService, private visitRequestService: VisitRequestService, private toastService: ToastService){
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0]
    
    for (let hour = 9; hour <= 20; hour++) {
      const timeString = hour < 10 ? `0${hour}:00` : `${hour}:00`;
      this.times.push(timeString);
    }
  }

  ngOnInit(): void{
    this.agentService.getAllAgentData().subscribe(response => {
      this.agents = response.filter(agents => agents.name)
  });
  }

  closeModal(result: any) {
    this.activeModal.close(result)
    this.form.reset()
  }

  addVisitRequest(){
    this.visitRequestService.addVisitRequest(this.form.value).subscribe({
      next: value => {
        this.toastService.show("Real Estate added successfully!", ToastClassEnum.success);
        this.closeModal(value);
      },
      error: err =>
        this.toastService.show("Error in adding Real Estate", ToastClassEnum.error)
    });
  }
}