import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { referenceDataForm } from '../../../form/form.service';
import { RealestateApiService } from '../../services/realestate-api.service';
@Component({
  selector: 'app-reference-data-modal',
  templateUrl: './reference-data-modal.component.html',
  styleUrl: './reference-data-modal.component.css'
})
export class ReferenceDataModalComponent implements OnInit{
  form = referenceDataForm;
  selectedRefDataModalType: string;
  selectedRefDataModalDescription: string;
  


  constructor(public activeModal: NgbActiveModal, private refDataService: RealestateApiService){}
  
  ngOnInit(): void {
    this.form.controls.type.setValue("");
  }

  closeModal(){
    this.activeModal.close();
    this.form.reset();
  }

  addRefData(){
    this.refDataService.addReferenceData(this.form.controls.type.value!, this.form.controls.description.value!).subscribe(response => {
      console.log(response)
    })
  }

}