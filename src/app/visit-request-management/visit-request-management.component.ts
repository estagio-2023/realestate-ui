import { Component, OnInit } from '@angular/core';
import { VisitRequestModel } from '../models/visit-request-model';
import { VisitRequestService } from '../services/visit-request.service';
import { Observable } from 'rxjs';
import { RealEstateManagementApiService } from '../services/real-estate-management-api.service';
import { RealEstateBody } from '../models/real-estate-management-model';
import { AgentService } from '../services/agent.service';

@Component({
  selector: 'app-visit-request-management',
  templateUrl: './visit-request-management.component.html',
  styleUrls: ['./visit-request-management.component.css']
})
export class VisitRequestManagementComponent implements OnInit {
  realEstatesHeaderList$: Observable<VisitRequestModel[]>;
  realEstateHeaderList: VisitRequestModel[] = [];
  realEstateBody: RealEstateBody = {} as RealEstateBody;
  AgentName: { [key: number]: string } = {};
  RealEstateName: { [key: number]: string } = {};

  constructor(
    private apiService: VisitRequestService, 
    private apiServiceRealEstate: RealEstateManagementApiService,
    private apiServiceAgent: AgentService
  ) {}

  ngOnInit(): void {
    this.loadRealEstateData();
  }

  loadRealEstateData(): void {
    this.realEstatesHeaderList$ = this.apiService.getAllVisitRequest();
    this.realEstatesHeaderList$.subscribe(response => {
      this.realEstateHeaderList = response;
      response.forEach(request => {
        this.getRealEstateTitleById(request.fkRealEstateId);
        this.getAgentNameById(request.fkAgentId);
      });
    });
  }

  getRealEstateTitleById(id: number): void {
    this.apiServiceRealEstate.getRealEstateById(id).subscribe(response => {
      this.RealEstateName[id] = response.title;
    });
  }

  getAgentNameById(id: number): void {
    this.apiServiceAgent.getAgentById(id).subscribe(response => {
      this.AgentName[id] = response.name;
    });
  }

  getRealEstateBody(realEstateId: number): void {
    this.apiServiceRealEstate.getRealEstateById(realEstateId).subscribe(response => {
      this.realEstateBody = response;
    });
  }
}