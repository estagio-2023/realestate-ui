import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RealEstateManagementModalComponent } from '../modals/real-estate-management-modal/real-estate-management-modal.component';
import { RealEstateManagementApiService } from '../services/real-estate-management-api.service';
import { RealEstateHeader, RealEstateBody } from '../models/real-estate-management-model';

@Component({
  selector: 'app-real-estate-management',
  templateUrl: './real-estate-management.component.html',
  styleUrl: './real-estate-management.component.css'
})
export class RealEstateManagementComponent{
  realEstatesHeaderList: RealEstateHeader[]
  realEstateBody: RealEstateBody | undefined

  constructor(private modalService: NgbModal, private apiService: RealEstateManagementApiService){}

  ngOnInit(): void {
    this.apiService.getAllRealEstates().subscribe(response => {
      this.realEstatesHeaderList = response
    })
  }

  getRealEstateBody(realEstateId: number) {
    this.apiService.getRealEstatePropertyById(realEstateId).subscribe(response => {
      this.realEstateBody = response
    })
  }

  openModal(){
    this.modalService.open(RealEstateManagementModalComponent, {
      keyboard: false
    })
  }
}