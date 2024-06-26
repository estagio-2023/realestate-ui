import { Component, OnInit, Input } from '@angular/core';
import { VisitRequestService } from '../../services/visit-request.service';
import { VisitRequestModel } from '../../../common/models/visit-request-model';
import { VisitRequestManagementModalComponent } from '../modals/visit-request-management-modal/visit-request-management-modal.component';
import { ActivatedRoute } from '@angular/router';
import { visitRequestForm } from '../../../common/services/form/form.service';
import { Observable } from 'rxjs';
import { ToastClassEnum } from '../../../common/enums/toast-class-enum';
import { ToastService } from '../../../common/services/toast-service/toast.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-visit-request-details',
  templateUrl: './visit-request-details.component.html',
})

export class VisitRequestDetailsComponent implements OnInit {
  visitRequestList$: Observable<VisitRequestModel[]>;
  realEstateId: number;
  form = visitRequestForm

  constructor(
    private activatedRoute: ActivatedRoute, 
    private apiService: VisitRequestService, 
    private modalService: NgbModal,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.realEstateId = +params['id'];
      this.loadVisitRequests();
    });
  }

  loadVisitRequests(): void {
    this.visitRequestList$ = this.apiService.getAllVisitRequestByRealEstateId(this.realEstateId);
  }

  openAddVisitRequestModal() {
    const modalRef = this.modalService.open(VisitRequestManagementModalComponent, { keyboard: false });
    modalRef.componentInstance.realEstateId = this.realEstateId
    modalRef.result.then((data) => {
      if (data) {
        this.loadVisitRequests();
      }
    });
  }

  editConfirmation(visitRequestId: number): void {
    this.apiService.updateVisitRequestConfirmationById(visitRequestId).subscribe({
      next: () => {
        this.toastService.show('Visit request updated successfully!', ToastClassEnum.success);
        this.loadVisitRequests();
      },
      error: err => {
        this.toastService.show('Error updating visit request', ToastClassEnum.error);
        console.error(err);
      }
    });
  }
}
