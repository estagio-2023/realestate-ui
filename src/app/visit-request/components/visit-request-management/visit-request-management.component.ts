import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RealEstateManagementApiService } from '../../../realestate/services/real-estate-management-api.service';
import { RealEstateHeader } from '../../../common/models/real-estate-management-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-visit-request-management',
  templateUrl: './visit-request-management.component.html',
  styleUrls: ['./visit-request-management.component.css']
})
export class VisitRequestManagementComponent implements OnInit {
  realEstatesHeaderList$: Observable<RealEstateHeader[]>;

  constructor(
    private apiServiceRealEstate: RealEstateManagementApiService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadRealEstateData();
  }

  loadRealEstateData(): void {
    this.realEstatesHeaderList$ = this.apiServiceRealEstate.getAllRealEstates();
  }

  
}