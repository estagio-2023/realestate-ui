import { Component, OnInit } from '@angular/core';
import { propertyForm } from '../../../form/form.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-property-management-modal',
  templateUrl: './property-management-modal.component.html',
  styleUrl: './property-management-modal.component.css'
})
export class PropertyManagementModalComponent implements OnInit {
  form = propertyForm
  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) {
    this.form = propertyForm
  }
  ngOnInit(): void {
    console.log(this.form.controls.title)
  }
  saveTest() {
    console.log(this.form.controls.title.errors)
    console.log("Resultado: ", this.form.controls.title.hasError('required'))
  }
  submitForm() {
    if (this.form.invalid) {
      return;
    }
    alert("Email sent with success!")
  }
  cancelModal() {
    this.modalService.dismissAll(PropertyManagementModalComponent);
    this.form.reset();
  }
  closeModal() {
    this.activeModal.close();
    this.form.reset();
  }
}