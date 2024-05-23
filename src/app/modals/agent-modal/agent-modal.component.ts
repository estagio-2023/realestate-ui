import { Component } from '@angular/core';
import { agentForm } from '../../../form/form.service';
import { AgentModel } from '../../models/agent-model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AgentService } from '../../services/agent.service';
import { ToastService } from '../../services/toast.service';
import _ from 'lodash';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-agent-modal',
  templateUrl: './agent-modal.component.html',
  styleUrl: './agent-modal.component.css'
})
export class AgentModalComponent {
  form = agentForm;
  agents: AgentModel[]
  agentData: AgentModel
  agentId: number
  formInitialValue: any
  formValueChangesSubscription: Subscription
  isFormChanged: boolean

  constructor(public activeModal: NgbActiveModal, private apiService: AgentService, private toastService: ToastService) {}

  ngOnInit(): void {
    this.apiService.getAllAgentData().subscribe(response => {
      this.agents = response
    });
    if(this.agentData !== undefined){
      this.initializeForm(this.agentData)
    }
    this.SubscripeToFormValueChanges()
  }

  closeModal(result: any) {
    if(result === 'cancel')
    {
      this.form.reset()
    }
    
    this.activeModal.close(result);
  }

  initializeForm(agentData: AgentModel) {
    this.form.patchValue(agentData)
    this.form.markAsPristine()
    this.formInitialValue = _.cloneDeep(this.form.value)
  }

  hasFormChanged(initialForm: any, currentForm: any): boolean{
    return JSON.stringify(initialForm) === JSON.stringify(currentForm)
  }

  private SubscripeToFormValueChanges(){
    this.formValueChangesSubscription = this.form.valueChanges.subscribe(() => {
      this.isFormChanged = !this.hasFormChanged(this.formInitialValue, this.form.value);
    })
  }
}