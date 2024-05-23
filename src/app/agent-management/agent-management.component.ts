import { Component } from '@angular/core';
import { AgentModel } from '../models/agent-model';
import { AgentService } from '../services/agent.service';
import { AgentModalComponent } from '../modals/agent-modal/agent-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agent-management',
  templateUrl: './agent-management.component.html',
  styleUrl: './agent-management.component.css'
})
export class AgentManagementComponent {
  agents$: Observable<AgentModel[]>

  constructor(private apiService: AgentService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadAgentData()
  }

  loadAgentData(){
    this.agents$ = this.apiService.getAllAgentData()
  }

  openAddAgentModal() {
    var response = this.modalService.open(AgentModalComponent, {
      keyboard: false
    });
    response.result.then((data) => {
      if (data != null) {
        this.loadAgentData()
      }
    })
  }
}