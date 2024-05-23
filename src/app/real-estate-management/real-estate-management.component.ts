import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RealEstateManagementModalComponent } from '../modals/real-estate-management-modal/real-estate-management-modal.component';
import { RealEstateManagementApiService } from '../services/real-estate-management-api.service';
import { RealEstateHeader, RealEstateBody } from '../models/real-estate-management-model';
import { Observable } from 'rxjs';
import { DeleteValidationModalComponent } from '../modals/delete-validation-modal/delete-validation-modal/delete-validation-modal.component';
import { ToastService } from '../services/toast.service';
import { ToastClassEnum } from '../enums/toast-class-enum';
import { ReferenceDataApiService } from '../services/reference-data-api.service';
import { ReferenceDataModel } from '../models/reference-data-model';

@Component({
  selector: 'app-real-estate-management',
  templateUrl: './real-estate-management.component.html',
  styleUrls: ['./real-estate-management.component.css']
})

export class RealEstateManagementComponent implements OnInit {
  realEstatesHeaderList$: Observable<RealEstateHeader[]>;
  realEstatesHeaderList: RealEstateHeader[];
  realEstateBody: RealEstateBody | undefined;

  typologyRefData: ReferenceDataModel[]
  cityRefData: ReferenceDataModel[]

  constructor(
    private modalService: NgbModal,
    private apiService: RealEstateManagementApiService, private toastService: ToastService,
    private refDataApiService: ReferenceDataApiService
  ) {}

  ngOnInit(): void {
    this.loadReferenceData()
    this.loadRealEstateData()
  }

  loadRealEstateData() {
    this.realEstatesHeaderList$ = this.apiService.getAllRealEstates();
  }

  loadReferenceData()
  {
    this.refDataApiService.getAllReferenceData().subscribe(refData => {
      this.typologyRefData = refData.typologies
      this.cityRefData = refData.cities
    })
  }

  getRealEstateBody(realEstateId: number) {
    this.apiService.getRealEstateById(realEstateId).subscribe(response => {
      this.realEstateBody = response;
    });
  }

  openDeleteModal(realEstateId: number){
    var modalRef = this.modalService.open(DeleteValidationModalComponent, {
      keyboard: false
    })

    modalRef.result.then(resp => {
      if(resp === 'confirm')
      {
        this.deleteRealEstate(realEstateId)
      }
    })
  }

  deleteRealEstate(realEstateId: number) {
    this.apiService.deleteRealEstate(realEstateId).subscribe({
      next: (value) => {
        this.toastService.show('Real Estate successfully deleted', ToastClassEnum.success)
        this.loadRealEstateData()
      },
      error: (err) =>
        this.toastService.show( 'Error in deleting real estate data', ToastClassEnum.error)
    });
  }

  openAddRealEstateModal() {
    const modalRef = this.modalService.open(RealEstateManagementModalComponent, { keyboard: false });
    modalRef.result.then((data) => {
      if (data) {
        this.loadRealEstateData();
      }
    });
  }

  getTypologyText(typologyId: number)
  {
    return this.typologyRefData?.find(x => x.id === typologyId)?.description
  }

  getCityText(cityId: number)
  {
    return this.cityRefData?.find(x => x.id === cityId)?.description 
  }
}