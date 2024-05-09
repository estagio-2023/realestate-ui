import { Component, OnInit } from '@angular/core'
import { realEstateForm } from '../../../form/form.service'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { ReferenceDataApiService } from '../../services/reference-data-api.service'
import { ReferenceDataModel } from '../../models/reference-data-model'
import { CustomerApiService } from '../../services/customer-api.service'
import { CustomerModel } from '../../models/customer-management-model'
import { AgentModel } from '../../models/agent-model'
import { AgentService } from '../../services/agent.service'

@Component({
  selector: 'app-real-estate-management-modal',
  templateUrl: './real-estate-management-modal.component.html',
  styleUrl: './real-estate-management-modal.component.css'
})
export class RealEstateManagementModalComponent {
  form = realEstateForm
  typologies: ReferenceDataModel[]  
  realEstateTypes: ReferenceDataModel[]
  amenities: ReferenceDataModel []
  cities: ReferenceDataModel[]
  customers : CustomerModel[]
  agents: AgentModel[]

  constructor(public activeModal: NgbActiveModal, private refDataApiService: ReferenceDataApiService, private customerApiService: CustomerApiService, private agentApiService: AgentService ){}

  ngOnInit(): void {
    this.refDataApiService.getAllReferenceData().subscribe(response => {
      this.typologies = response.typologies
      this.cities = response.cities
      this.realEstateTypes = response.realEstateTypes
    });
    this.customerApiService.getAllCustomerData().subscribe(response => {
      this.customers = response.filter(customer => customer.name)
    })
    this.agentApiService.getAllAgentData().subscribe(response => {
      this.agents = response.filter(agents => agents.name)
    })
  }
  closeModal() {
    this.activeModal.close()
    this.form.reset()
  }
}