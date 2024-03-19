import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { referenceDataForm } from '../../../form/form.service';
@Component({
  selector: 'app-reference-data-modal',
  templateUrl: './reference-data-modal.component.html',
  styleUrl: './reference-data-modal.component.css'
})
export class ReferenceDataModalComponent {
  form = referenceDataForm;

  constructor(public activeModal: NgbActiveModal, private modalService:NgbModal){
    this.form;
  }

  closeModal(){
    this.modalService.dismissAll(ReferenceDataModalComponent);
  }

  cancelModal(){
    this.modalService.dismissAll(ReferenceDataModalComponent);
    this.form.reset();
  }
}