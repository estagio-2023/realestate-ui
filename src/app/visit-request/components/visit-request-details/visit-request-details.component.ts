import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VisitRequestService } from '../../services/visit-request.service';
import { VisitRequestModel } from '../../../common/models/visit-request-model';
import { Observable } from 'rxjs';
import { ToastClassEnum } from '../../../common/enums/toast-class-enum';
import { ToastService } from '../../../common/services/toast-service/toast.service';

@Component({
  selector: 'app-visit-request-details',
  templateUrl: './visit-request-details.component.html',
  styleUrls: ['./visit-request-details.component.css']
})

export class VisitRequestDetailsComponent implements OnInit {
  visitRequestList$: Observable<VisitRequestModel[]>;
  realEstateId: number;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private apiService: VisitRequestService, 
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

  editConfirmation(visitRequestId: number): void {
    this.apiService.UpdateVisitRequestConfirmationById(visitRequestId).subscribe({
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