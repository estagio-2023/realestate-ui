import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { referenceDataForm } from '../../../form/form.service';
import { RealestateApiService } from '../../services/realestate-api.service';
import { ToastService } from '../../services/toast.service';
import { ToastClassEnum } from '../../enums/toast-class-enum';

@Component({
  selector: 'app-reference-data-modal',
  templateUrl: './reference-data-modal.component.html',
  styleUrl: './reference-data-modal.component.css'
})
export class ReferenceDataModalComponent implements OnInit {
  form = referenceDataForm;
  selectedRefDataModalType: string;
  selectedRefDataModalDescription: string;

  constructor(public activeModal: NgbActiveModal, private refDataService: RealestateApiService, private toastService: ToastService) { }

  ngOnInit(): void {
    this.form.controls.type.setValue("");
  }

  closeModal() {
    this.activeModal.close();
    this.form.reset();
  }

  addRefData() {
    var test = this.form.value;
    this.refDataService.addReferenceData(this.form.controls.type.value!, this.form.value).subscribe({
      next: value => this.toastService.show("Changes successfully saved!", ToastClassEnum.success),
      error: err => this.toastService.show("Error in saving changes", ToastClassEnum.error)
    })

  }

  
}