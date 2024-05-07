import { Component } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ReferenceDataModalComponent } from '../modals/reference-data-modal/reference-data-modal.component'
import { ReferenceDataResponseDto } from '../dto/referenceDataResponseDto'
import { ReferenceDataModel } from '../models/reference-data-model'
import { Observable } from 'rxjs'
import { ReferenceDataApiService } from '../services/reference-data-api.service'
import { ToastClassEnum } from '../enums/toast-class-enum'
import { ToastService } from '../services/toast.service'
import { DeleteValidationModalComponent } from '../modals/delete-validation-modal/delete-validation-modal/delete-validation-modal.component'

@Component({
  selector: 'app-reference-data',
  templateUrl: './reference-data.component.html',
  styleUrl: './reference-data.component.css'
})
export class ReferenceDataComponent {
  referenceDataList$: Observable<ReferenceDataResponseDto>
  referenceDataList: ReferenceDataModel[]
  selectedRefDataType: string

  constructor(private modalService: NgbModal, private apiService: ReferenceDataApiService, private toastService: ToastService) { }

  ngOnInit(): void {
    this.referenceDataList$ = this.apiService.getAllReferenceData()

    this.selectedRefDataType = 'realestate_type'
    this.dropDownFilter()
  }
  
  dropDownFilter(): void {

    switch (this.selectedRefDataType) {
      case 'realestate_type':
        this.referenceDataList$.subscribe(refDataList => {
          this.referenceDataList = refDataList.realEstateTypes
        })
        break
      case 'typology':
        this.referenceDataList$.subscribe(refDataList => {
          this.referenceDataList = refDataList.typologies
        })
        break
      case 'city':
        this.referenceDataList$.subscribe(refDataList => {
          this.referenceDataList = refDataList.cities
        })
        break
      case 'amenity':
        this.referenceDataList$.subscribe(refDataList => {
          this.referenceDataList = refDataList.amenities
        })
        break
    }
  }

  openModal() {
    var response = this.modalService.open(ReferenceDataModalComponent, {
      keyboard: false
    })
    response.result.then((data) => {
      if (data != null) {
        this.dropDownFilter();
      }
    })
  }


  deleteModal(){
      this.modalService.open(DeleteValidationModalComponent, {
      keyboard: false
    })
  }

}
