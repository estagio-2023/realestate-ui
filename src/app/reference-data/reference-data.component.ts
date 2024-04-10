import { Component, OnInit } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ReferenceDataModalComponent } from '../modals/reference-data-modal/reference-data-modal.component'
import { RealestateApiService } from '../services/realestate-api.service'
import { ReferenceDataResponseDto } from '../dto/referenceDataResponseDto'
import { ReferenceDataModel } from '../models/reference-data-model'
import { Observable } from 'rxjs'
@Component({
  selector: 'app-reference-data',
  templateUrl: './reference-data.component.html',
  styleUrl: './reference-data.component.css'
})
export class ReferenceDataComponent {
  referenceDataList$: Observable<ReferenceDataResponseDto>
  referenceDataList: ReferenceDataModel[]
  selectedRefDataType: string

constructor(private modalService:NgbModal, private apiService: RealestateApiService){}
  
ngOnInit(): void {
  this.referenceDataList$ = this.apiService.getAllReferenceData()

  this.selectedRefDataType = '2'
  this.dropDownFilter()
}

dropDownFilter(): void {

  switch(this.selectedRefDataType){
    case '1':
      this.referenceDataList$.subscribe(refDataList => {
        console.log(refDataList)
        this.referenceDataList = refDataList.typologies
      })
      break
    case '2':
      this.referenceDataList$.subscribe(refDataList => {
        this.referenceDataList = refDataList.realEstateTypes
      })
      break
    case '3':
      this.referenceDataList$.subscribe(refDataList => {
        this.referenceDataList = refDataList.cities
      })
      break
    case '4':
      this.referenceDataList$.subscribe(refDataList => {
        this.referenceDataList = refDataList.amenities
      })
      break
  }
}
  
openModal(){
    this.modalService.open(ReferenceDataModalComponent, {
      keyboard: false
    })
  }
}