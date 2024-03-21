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
  constructor(public activeModal: NgbActiveModal) {
    
  }
  ngOnInit(): void {
    console.log(this.form.controls.title)
  }
  
  closeModal() {
    this.activeModal.close();
    this.form.reset();
  }
}