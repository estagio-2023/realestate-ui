import { Component, Input } from '@angular/core';
import { VisitRequestService } from '../../services/visit-request.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VisitRequestModel } from '../../../common/models/visit-request-model';
import { VisitRequestManagementModalComponent } from '../modals/visit-request-management-modal/visit-request-management-modal.component';
import { ActivatedRoute } from '@angular/router';
import { visitRequestForm } from '../../../common/services/form/form.service';

@Component({
  selector: 'app-visit-request-details',
  templateUrl: './visit-request-details.component.html',
  styleUrl: './visit-request-details.component.css'
})

export class VisitRequestDetailsComponent {
  visitRequestList: VisitRequestModel[]
  realEstateId: number;
  form = visitRequestForm
  
  constructor(private apiService: VisitRequestService, private modalService: NgbModal,private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.realEstateId = +params['id'];
    });
   
    this.loadVisitRequestData();
  }   

  openAddVisitRequestModal() {
    const modalRef = this.modalService.open(VisitRequestManagementModalComponent, { keyboard: false });
    modalRef.componentInstance.realEstateId = this.realEstateId
    modalRef.result.then((data) => {
      if (data) {
        this.loadVisitRequestData();
        this.form.reset();
      }
    });
  }

  loadVisitRequestData(){
    this.apiService.getAllVisitRequestByRealEstateId(this.realEstateId).subscribe(response => {
      this.visitRequestList = response
    });
  }
}