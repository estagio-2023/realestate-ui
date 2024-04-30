import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PropertyManagementModalComponent } from '../modals/property-management-modal/property-management-modal.component';
import { PropertyManagementApiService } from '../services/property-management-api.service';
import { PropertyHeader, PropertyBody } from '../models/property-management-model';

@Component({
  selector: 'app-property-management',
  templateUrl: './property-management.component.html',
  styleUrl: './property-management.component.css'
})
export class PropertyManagementComponent{
  propertiesHeaderList: PropertyHeader[]
  propertyBody: PropertyBody | undefined

  constructor(private modalService: NgbModal, private apiService: PropertyManagementApiService){}

  ngOnInit(): void {
    this.apiService.getAllProperties().subscribe(response => {
      this.propertiesHeaderList = response
    })
  }

  openModal(){
    this.modalService.open(PropertyManagementModalComponent, {
      keyboard: false
    })
  }
}