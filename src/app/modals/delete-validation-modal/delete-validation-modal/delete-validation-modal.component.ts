import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReferenceDataApiService } from '../../../services/reference-data-api.service';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-delete-validation-modal',
  templateUrl: './delete-validation-modal.component.html',
  styleUrl: './delete-validation-modal.component.css'
})
export class DeleteValidationModalComponent {

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private apiService: ReferenceDataApiService, private toastService: ToastService) { }

  closeModal(action: string) {
    this.activeModal.close(action)
  }
}