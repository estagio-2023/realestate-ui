import { Component, OnInit } from '@angular/core'
import { realEstateForm } from '../../../form/form.service'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { ReferenceDataApiService } from '../../services/reference-data-api.service'
import { ReferenceDataModel } from '../../models/reference-data-model'
import { CustomerApiService } from '../../services/customer-api.service'
import { CustomerModel } from '../../models/customer-management-model'
import { RealEstateManagementApiService } from '../../services/real-estate-management-api.service'
import { ToastClassEnum } from '../../enums/toast-class-enum'
import { ToastService } from '../../services/toast.service'
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

  constructor(public activeModal: NgbActiveModal, private refDataApiService: ReferenceDataApiService, private customerApiService: CustomerApiService, private agentApiService: AgentService, private realEstateApiService: RealEstateManagementApiService, private toastService: ToastService){}

  ngOnInit(): void {
    this.refDataApiService.getAllReferenceData().subscribe(response => {
      this.typologies = response.typologies
      this.cities = response.cities
      this.realEstateTypes = response.realEstateTypes
      this.amenities = response.amenities
    });
    this.customerApiService.getAllCustomerData().subscribe(response => {
      this.customers = response.filter(customer => customer.name)
    })
  }
  closeModal(result: any) {
    this.activeModal.close(result)
    this.form.reset()
  }

  addRealEstate(){
    this.realEstateApiService.addRealEstateData(this.form.value).subscribe({
      next: value => {
        this.toastService.show("Real Estate added successfully!", ToastClassEnum.success);
        this.closeModal(value);
      },
      error: err =>
        this.toastService.show("Error in adding Real Estate", ToastClassEnum.error)
    });
  }
}