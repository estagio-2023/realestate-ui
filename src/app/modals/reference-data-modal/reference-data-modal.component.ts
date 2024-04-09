import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { referenceDataForm } from '../../../form/form.service';

@Component({
  selector: 'app-reference-data-modal',
  templateUrl: './reference-data-modal.component.html',
  styleUrl: './reference-data-modal.component.css'
})
export class ReferenceDataModalComponent implements OnInit{
  form = referenceDataForm;

  constructor(public activeModal: NgbActiveModal){}
  
  ngOnInit(): void {
    this.form.controls.type.setValue("");
  }

  closeModal(){
    this.activeModal.close();
    this.form.reset();
  }
}