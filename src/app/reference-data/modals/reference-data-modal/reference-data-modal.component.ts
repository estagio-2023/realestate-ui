import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { referenceDataForm } from '../../../common/services/form/form.service';
import { ToastService } from '../../../common/services/toast-service/toast.service';
import { ToastClassEnum } from '../../../common/enums/toast-class-enum';
import { ReferenceDataApiService } from '../../services/reference-data-api.service';

@Component({
  selector: 'app-reference-data-modal',
  templateUrl: './reference-data-modal.component.html',
})
export class ReferenceDataModalComponent implements OnInit {
  form = referenceDataForm;

  constructor(public activeModal: NgbActiveModal, private refDataService: ReferenceDataApiService, private toastService: ToastService) { }

  ngOnInit(): void {
    this.form.controls.type.setValue("");
  }

  closeModal(result:any) {
    this.activeModal.close(result);
    this.form.reset();
  }

  addRefData() {
    this.refDataService.addReferenceData(this.form.controls.type.value!, this.form.value).subscribe({
      next: value => {
        this.toastService.show("Changes successfully saved!", ToastClassEnum.success),
          this.closeModal(value)
      },
      error: err =>
        this.toastService.show("Error in saving changes", ToastClassEnum.error)
    })
  }
}