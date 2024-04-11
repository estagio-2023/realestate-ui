import { Component, OnInit } from '@angular/core'
import { propertyForm } from '../../../form/form.service'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { RealestateApiService } from '../../services/realestate-api.service'
import { ReferenceDataModel } from '../../models/reference-data-model'

@Component({
  selector: 'app-property-management-modal',
  templateUrl: './property-management-modal.component.html',
  styleUrl: './property-management-modal.component.css'
})
export class PropertyManagementModalComponent {
  form = propertyForm
  typologies: ReferenceDataModel[]
  realEstateTypes: ReferenceDataModel[]
  cities: ReferenceDataModel[]

  constructor(public activeModal: NgbActiveModal, private apiService: RealestateApiService) {}

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