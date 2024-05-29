import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VisitRequestService } from '../../services/visit-request.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VisitRequestModel } from '../../../common/models/visit-request-model';
import { DatePipe } from '@angular/common';

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
  startTime: Date = new Date();
  endTime: Date = new Date();
  start: string
  end: string
  

  constructor(private activatedRoute: ActivatedRoute, private apiService: VisitRequestService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.realEstateId = params['id'];
    });

    this.apiService.getAllVisitRequestByRealEstateId(this.realEstateId).subscribe(response => {
      this.visitRequestList = response
    });

    let start = this.startTime.toString().slice(-2);
    let end = this.endTime.toString().slice(-2);
  }   
}
