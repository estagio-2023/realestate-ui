import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RealEstateManagementModalComponent } from '../modals/real-estate-management-modal/real-estate-management-modal.component';
import { RealEstateManagementApiService } from '../services/real-estate-management-api.service';
import { RealEstateHeader, RealEstateBody } from '../models/real-estate-management-model';
import { DeleteModalComponent } from '../modals/delete-real-estate-modal/delete-real-estate-modal.component';
import { Observable } from 'rxjs';
import { ReferenceDataApiService } from '../services/reference-data-api.service';

@Component({
  selector: 'app-real-estate-management',
  templateUrl: './real-estate-management.component.html',
  styleUrls: ['./real-estate-management.component.css']
})

export class RealEstateManagementComponent implements OnInit {
  realEstatesHeaderList$: Observable<RealEstateHeader[]>;
  realEstatesHeaderList: RealEstateHeader[];
  realEstateBody: RealEstateBody | undefined;
  typologyDescriptions: { [key: number]: string } = {};
  cityDescriptions: { [key: number]: string } = {};
  

  constructor(
    private modalService: NgbModal,
    private apiService: RealEstateManagementApiService,
    private refDataApiService: ReferenceDataApiService
  ) {}

  ngOnInit(): void {
    this.loadRealEstateData();
  }

  loadRealEstateData() {
    this.realEstatesHeaderList$ = this.apiService.getAllRealEstates();
    this.realEstatesHeaderList$.subscribe(response => {
      this.realEstatesHeaderList = response;
      response.forEach(response => {
        this.getRefDataByTypeIdDescription('typology', response.typologyId);
        this.getRefDataByTypeIdDescription('city', response.cityId);
      });
    });
  }

  getRefDataByTypeIdDescription(type: string, id: number) {
    this.refDataApiService.getRefDataById(type, id).subscribe(response => {
      if (response) {
        if (type === 'typology') {
          this.typologyDescriptions[id] = response.description;
        } else if (type === 'city') {
          this.cityDescriptions[id] = response.description;
        }
      }
    });
  }

  getRealEstateBody(realEstateId: number) {
    this.apiService.getRealEstateById(realEstateId).subscribe(response => {
      this.realEstateBody = response;
    });
  }

  deleteModal(realEstateId: number) {
    const modalRef = this.modalService.open(DeleteModalComponent, { keyboard: false });
    modalRef.componentInstance.realEstateId = realEstateId;

    modalRef.result.then(() => {
      this.loadRealEstateData();
    }, () => {});
  }

  openModal() {
    const modalRef = this.modalService.open(RealEstateManagementModalComponent, { keyboard: false });
    modalRef.result.then((data) => {
      if (data) {
        this.loadRealEstateData();
      }
    });
  }
}