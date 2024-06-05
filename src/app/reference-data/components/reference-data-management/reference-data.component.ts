import { Component } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ReferenceDataModalComponent } from '../../modals/reference-data-modal/reference-data-modal.component'
import { ReferenceDataResponseDto } from '../../../common/dto/referenceDataResponseDto'
import { ReferenceDataModel } from '../../../common/models/reference-data-model'
import { Observable } from 'rxjs'
import { ReferenceDataApiService } from '../../services/reference-data-api.service'
import { DeleteValidationModalComponent } from '../../../common/modals/delete-validation-modal/delete-validation-modal.component'
import { ToastService } from '../../../common/services/toast-service/toast.service'
import { ToastClassEnum } from '../../../common/enums/toast-class-enum'

@Component({
  selector: 'app-reference-data',
  templateUrl: './reference-data.component.html',
})
export class ReferenceDataComponent {
  referenceDataList$: Observable<ReferenceDataResponseDto>
  referenceDataList: ReferenceDataModel[]
  selectedRefDataType: string
  refData: ReferenceDataResponseDto

  constructor(private modalService: NgbModal, private apiService: ReferenceDataApiService, private toastService: ToastService) { }

  ngOnInit(): void {
    this.loadReferenceData()
    this.selectedRefDataType = 'realestate_type'
    this.dropDownFilter()
  }

  loadReferenceData()
  {
    this.referenceDataList$ = this.apiService.getAllReferenceData()
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
    var modalRef = this.modalService.open(ReferenceDataModalComponent, {
      keyboard: false
    })
    modalRef.result.then((data) => {
      if (data != null) {
        this.dropDownFilter();
      }
    })
  }

  openDeleteModal(refDataId: number) {
    var modalRef = this.modalService.open(DeleteValidationModalComponent, {
      keyboard: false,
      animation: false
    })

    modalRef.result.then(resp => {
      if(resp === 'confirm')
      {
        this.deleteReferenceData(refDataId)
      }
    })
  }

  deleteReferenceData(refDataId: number) {
    this.apiService.deleteReferenceData(this.selectedRefDataType, refDataId).subscribe({
      next: value => {
        this.toastService.show("Reference data successfully deleted", ToastClassEnum.success)
        this.dropDownFilter();
      },
      error: err =>
        this.toastService.show("Error while trying to delete reference data", ToastClassEnum.error),
    })
  }
}