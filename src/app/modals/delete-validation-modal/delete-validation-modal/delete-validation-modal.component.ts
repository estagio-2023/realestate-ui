import { Component,Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReferenceDataApiService } from '../../../services/reference-data-api.service';
import { ToastService } from '../../../services/toast.service';
import { ToastClassEnum } from '../../../enums/toast-class-enum';
import { ReferenceDataModel } from '../../../models/reference-data-model';
import { ReferenceDataComponent } from '../../../reference-data/reference-data.component';

@Component({
  selector: 'app-delete-validation-modal',
  templateUrl: './delete-validation-modal.component.html',
  styleUrl: './delete-validation-modal.component.css'
})
export class DeleteValidationModalComponent {
  referenceDataComponent: ReferenceDataComponent
  
  ngOnInit(): void {
    let selectedRefDataType = this.referenceDataComponent?.selectedRefDataType
    console.log(selectedRefDataType)
  }

  constructor(public activeModal: NgbActiveModal,private modalService: NgbModal, private apiService: ReferenceDataApiService, private toastService: ToastService){}
 
  closeModal() {
    this.activeModal.close()
  }
  
  deleteRefData(refDataType: string, refDataId: number) {
    this.apiService.deleteReferenceData(refDataType, refDataId).subscribe({
      next: value => {
        this.toastService.show("Reference data successfully deleted", ToastClassEnum.success)
      },
      error: err =>
        this.toastService.show("Error in deleting referenca data", ToastClassEnum.error),
    })
  }

}