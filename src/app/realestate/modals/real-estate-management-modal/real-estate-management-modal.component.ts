import { Component, OnInit } from '@angular/core'
import { realEstateForm } from '../../../common/services/form/form.service'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { ReferenceDataApiService } from '../../../reference-data/services/reference-data-api.service'
import { ReferenceDataModel } from '../../../common/models/reference-data-model'
import { CustomerApiService } from '../../../customer/services/customer-api.service'
import { CustomerModel } from '../../../common/models/customer-model'
import { RealEstateManagementApiService } from '../../services/real-estate-management-api.service'
import { ToastClassEnum } from '../../../common/enums/toast-class-enum'
import { ToastService } from '../../../common/services/toast-service/toast.service'
import { AgentService } from '../../../agent/services/agent.service'

@Component({
  selector: 'app-real-estate-management-modal',
  templateUrl: './real-estate-management-modal.component.html',
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