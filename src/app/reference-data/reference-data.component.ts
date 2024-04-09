import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReferenceDataModalComponent } from '../modals/reference-data-modal/reference-data-modal.component';
import { RealestateApiService } from '../services/realestate-api.service';
import { RefrenceDataResponseDto } from '../dto/ReferenceDataResponseDto';
import { ReferenceDataModel } from '../models/reference-data-model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-reference-data',
  templateUrl: './reference-data.component.html',
  styleUrl: './reference-data.component.css'
})
export class ReferenceDataComponent {
  referenceDataList$: Observable<RefrenceDataResponseDto>;
  referenceDataList: ReferenceDataModel[];
  selectedRefDataType: string;

constructor(private modalService:NgbModal, private apiService: RealestateApiService){}
  
ngOnInit(): void {

  this.referenceDataList$ = this.apiService.getAllReferenceData()

  this.selectedRefDataType = '2'
  this.dropDownFilter()
}

dropDownFilter(): void {

  switch(this.selectedRefDataType){
    case '2':
      this.referenceDataList$.subscribe(refDataList => {
        this.referenceDataList = refDataList.typologies
      })
      break;
    // case '2':
    //   this.referenceDataList = response.realEstateTypesList;
    //   break;
    // case '3':
    //   this.referenceDataList = response.citiesList;
    //   break;
    // case '4':
    //   this.referenceDataList = response.amenitiesList;
    //   break;
  
  };
}
  
openModal(){
    this.modalService.open(ReferenceDataModalComponent, {
      keyboard: false
    });
  }
}