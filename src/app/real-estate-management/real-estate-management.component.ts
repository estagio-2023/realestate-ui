import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RealEstateManagementModalComponent } from '../modals/real-estate-management-modal/real-estate-management-modal.component';
import { RealEstateManagementApiService } from '../services/real-estate-management-api.service';
import { RealEstateHeader, RealEstateBody } from '../models/real-estate-management-model';
import { ReferenceDataApiService } from '../services/reference-data-api.service';
import { ReferenceDataModel } from '../models/reference-data-model';

@Component({
  selector: 'app-real-estate-management',
  templateUrl: './real-estate-management.component.html',
  styleUrl: './real-estate-management.component.css'
})
export class RealEstateManagementComponent {
  realEstatesHeaderList: RealEstateHeader[]
  realEstateBody: RealEstateBody | undefined
  cities: ReferenceDataModel[]
  typologies: ReferenceDataModel[]

  constructor(private modalService: NgbModal, private apiService: RealEstateManagementApiService, public refDataApiService: ReferenceDataApiService ) { }

  ngOnInit(): void {
    this.apiService.getAllRealEstates().subscribe(response => {
      this.realEstatesHeaderList = response
    })
    
    this.refDataApiService.getAllReferenceData().subscribe(response =>{
      this.cities = response.cities
      this.typologies = response.typologies

      for(let i = 0; i < this.realEstatesHeaderList.length; i++){
        this.realEstatesHeaderList.forEach(realEstateHeader => {
          if(realEstateHeader.typologyId == this.typologies[i].id){
            realEstateHeader.typologyId = this.typologies[i].description
          }
          if(realEstateHeader.cityId == this.cities[i].id){
            realEstateHeader.cityId = this.cities[i].description
          }
        })
      }      
    })
  }

  getRealEstateBody(realEstateId: number) {
    this.apiService.getRealEstateById(realEstateId).subscribe(response => {
      this.realEstateBody = response
    })
  }

  openModal() {
    this.modalService.open(RealEstateManagementModalComponent, {
      keyboard: false
    })
  }  
}
