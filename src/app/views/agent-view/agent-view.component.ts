import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgentService } from '../../services/agent.service';
import { AgentModel } from '../../models/agent-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteAgentValidationModalComponent } from '../../modals/delete-agent-validation-modal/delete-agent-validation-modal.component';

@Component({
  selector: 'app-agent-view',
  templateUrl: './agent-view.component.html',
  styleUrl: './agent-view.component.css'
})
export class AgentViewComponent implements OnInit {
    @Input() name = ''; 
    @Input() phoneNumber = '';
    @Input() email = '';
    agentData: AgentModel | undefined
    agentId: number;
  
    constructor(private activatedRoute: ActivatedRoute, private apiService: AgentService, private modalService: NgbModal){}

    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        this.agentId = params['id'];
      });
      this.apiService.getAgentById(this.agentId).subscribe(response => {
        this.agentData = response
      });
    }   
    
    deleteModal(agentId: number){
      var response = this.modalService.open(DeleteAgentValidationModalComponent, {
        keyboard: false
      })
      response.componentInstance.agentId = agentId;
    }
}
