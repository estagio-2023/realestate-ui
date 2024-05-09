import { Component, OnInit } from '@angular/core'
import { realEstateForm } from '../../../form/form.service'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { ReferenceDataApiService } from '../../services/reference-data-api.service'
import { ReferenceDataModel } from '../../models/reference-data-model'

@Component({
  selector: 'app-real-estate-management-modal',
  templateUrl: './real-estate-management-modal.component.html',
  styleUrl: './real-estate-management-modal.component.css'
})
export class RealEstateManagementModalComponent {
  form = realEstateForm
  typologies: ReferenceDataModel[]  
  realEstateTypes: ReferenceDataModel[]
  cities: ReferenceDataModel[]

  constructor(public activeModal: NgbActiveModal, private apiService: ReferenceDataApiService) {}

  ngOnInit(): void {
    this.apiService.getAllReferenceData().subscribe(response => {
      this.typologies = response.typologies
      this.cities = response.cities
      this.realEstateTypes = response.realEstateTypes
    })
  }

  closeModal() {
    this.activeModal.close()
    this.form.reset()
  }
}