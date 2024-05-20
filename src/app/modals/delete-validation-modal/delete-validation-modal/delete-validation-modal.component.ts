import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReferenceDataApiService } from '../../../services/reference-data-api.service';
import { ToastService } from '../../../services/toast.service';
import { ToastClassEnum } from '../../../enums/toast-class-enum';
import { ReferenceDataComponent } from '../../../reference-data/reference-data.component';
import { Observable } from 'rxjs'
import { ReferenceDataResponseDto } from '../../../dto/referenceDataResponseDto'; 

@Component({
  selector: 'app-delete-validation-modal',
  templateUrl: './delete-validation-modal.component.html',
  styleUrl: './delete-validation-modal.component.css'
})
export class DeleteValidationModalComponent {
  referenceDataComponent: ReferenceDataComponent
  refDataType: string
  refDataId: number

  constructor(public activeModal: NgbActiveModal, private apiService: ReferenceDataApiService, private toastService: ToastService) { }

  closeModal() {
    this.activeModal.close()
  }

  deleteRefData() {
    this.apiService.deleteReferenceData(this.refDataType, this.refDataId).subscribe({
      next: value => {
        this.toastService.show("Reference data successfully deleted", ToastClassEnum.success)
      },
      error: err =>
        this.toastService.show("Error in deleting referenca data", ToastClassEnum.error),
    })

    this.closeModal()
  }
}