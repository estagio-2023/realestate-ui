import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RealEstateManagementApiService } from '../services/real-estate-management-api.service';
import {RealEstateBody } from '../models/real-estate-management-model';

@Component({
  selector: 'app-visit-request-management',
  templateUrl: './visit-request-management.component.html',
  styleUrls: ['./visit-request-management.component.css']
})
export class VisitRequestManagementComponent implements OnInit {
  realEstatesHeaderList$: Observable<RealEstateBody[]>;

  constructor(
    private apiServiceRealEstate: RealEstateManagementApiService,
  ) {}

  ngOnInit(): void {
    this.loadRealEstateData();
  }

  loadRealEstateData(): void {
    this.realEstatesHeaderList$ = this.apiServiceRealEstate.getAllRealEstates();
  }
}