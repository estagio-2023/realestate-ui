import { Component, Input } from '@angular/core';
import { VisitRequestService } from '../../services/visit-request.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VisitRequestModel } from '../../../common/models/visit-request-model';
import { VisitRequestManagementModalComponent } from '../modals/visit-request-management-modal/visit-request-management-modal.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visit-request-details',
  templateUrl: './visit-request-details.component.html',
  styleUrl: './visit-request-details.component.css'
})

export class VisitRequestDetailsComponent {

  @Input() name = ''; 
  @Input() phoneNumber = '';
  @Input() email = '';
  visitRequestList: VisitRequestModel[]
  realEstateId: number;
  
  constructor(private apiService: VisitRequestService, private modalService: NgbModal,private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.realEstateId = +params['id'];
    });
   
    this.loadVisitRequestData();
  }   

  openAddVisitRequestModal() {
    const modalRef = this.modalService.open(VisitRequestManagementModalComponent, { keyboard: false });
    modalRef.result.then((data) => {
      if (data) {
        this.loadVisitRequestData();
      }
    });
  }

  loadVisitRequestData(){
    this.apiService.getAllVisitRequestByRealEstateId(this.realEstateId).subscribe(response => {
      this.visitRequestList = response
    });
  }
}