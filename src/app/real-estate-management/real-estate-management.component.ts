import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RealEstateManagementModalComponent } from '../modals/real-estate-management-modal/real-estate-management-modal.component';
import { RealEstateManagementApiService } from '../services/real-estate-management-api.service';
import { RealEstateHeader, RealEstateBody } from '../models/real-estate-management-model';
import { Observable } from 'rxjs';
import { DeleteValidationModalComponent } from '../modals/delete-validation-modal/delete-validation-modal/delete-validation-modal.component';
import { ToastService } from '../services/toast.service';
import { ToastClassEnum } from '../enums/toast-class-enum';

@Component({
  selector: 'app-real-estate-management',
  templateUrl: './real-estate-management.component.html',
  styleUrl: './real-estate-management.component.css'
})

export class RealEstateManagementComponent{
  realEstatesHeaderList$: Observable<RealEstateHeader[]>
  realEstateBody: RealEstateBody | undefined

  constructor(private modalService: NgbModal, private apiService: RealEstateManagementApiService, private toastService: ToastService){}

  ngOnInit(): void {
    this.realEstatesHeaderList$ = this.apiService.getAllRealEstates();
  }

  getRealEstateBody(realEstateId: number) {
    this.apiService.getRealEstateById(realEstateId).subscribe(response => {
      this.realEstateBody = response
    })
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

  loadRealEstateData(){
    this.realEstatesHeaderList$ = this.apiService.getAllRealEstates();
  }

  openModal(){
    var response = this.modalService.open(RealEstateManagementModalComponent, {
      keyboard: false
    })

    response.result.then((data) => {
      if (data != null) {
        this.loadRealEstateData();
      }
    })
  }
}