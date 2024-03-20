import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { referenceDataForm } from '../../../form/form.service';
@Component({
  selector: 'app-reference-data-modal',
  templateUrl: './reference-data-modal.component.html',
  styleUrl: './reference-data-modal.component.css'
})
export class ReferenceDataModalComponent {
  form = referenceDataForm;

  constructor(public activeModal: NgbActiveModal){}

  closeModal(){
    this.activeModal.close();
    this.form.reset();
  }
}