import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RealEstateManagementModalComponent } from '../modals/real-estate-management-modal/real-estate-management-modal.component';
import { RealEstateManagementApiService } from '../services/real-estate-management-api.service';
import { RealEstateHeader, RealEstateBody } from '../models/real-estate-management-model';
import { DeleteModalComponent } from '../modals/delete-real-estate-modal/delete-real-estate-modal.component';
import { Observable } from 'rxjs';
import { ReferenceDataApiService } from '../services/reference-data-api.service';
import { ReferenceDataModel } from '../models/reference-data-model';

@Component({
  selector: 'app-real-estate-management',
  templateUrl: './real-estate-management.component.html',
  styleUrl: './real-estate-management.component.css'
})

export class RealEstateManagementComponent{
  realEstatesHeaderList$: Observable<RealEstateHeader[]>
  realEstatesHeaderList: RealEstateHeader[]
  realEstateHeader: RealEstateHeader[]
  realEstateBody: RealEstateBody | undefined
  cities: ReferenceDataModel[]
  typologies: ReferenceDataModel[]

  constructor(private modalService: NgbModal, private apiService: RealEstateManagementApiService, public refDataApiService: ReferenceDataApiService ) { }

  ngOnInit(): void {
    this.loadRealEstateData();

    this.realEstatesHeaderList$.subscribe(response => {
      this.realEstatesHeaderList = response;
    });

    this.refDataApiService.getAllReferenceData().subscribe(response =>{
      this.cities = response.cities
      this.typologies = response.typologies
      
      for (let i = 0; i < this.realEstatesHeaderList.length; i++) {
        let typology = this.typologies.find(typology => typology.id == this.realEstatesHeaderList[i].typologyId);
        let city = this.cities.find(city => city.id == this.realEstatesHeaderList[i].cityId);

        if (typology) {
            this.realEstatesHeaderList[i].typologyId = typology.description;
        }
        if (city) {
            this.realEstatesHeaderList[i].cityId = city.description;
        }
      }
    })
  }

  getRealEstateBody(realEstateId: number) {
    this.apiService.getRealEstateById(realEstateId).subscribe(response => {
      this.realEstateBody = response
    })
  }

  deleteModal(realEstateId: number){
    var response = this.modalService.open(DeleteModalComponent, {
      keyboard: false
    })
    response.componentInstance.realEstateId = realEstateId;
  }

  loadRealEstateData(){
    this.realEstatesHeaderList$ = this.apiService.getAllRealEstates();
  }

  openModal(){
    var response = this.modalService.open(RealEstateManagementModalComponent, {
      keyboard: false
    })

    response.result.then((data) => {
      if (data != null) {
        this.loadRealEstateData();
      }
    })
  }
}