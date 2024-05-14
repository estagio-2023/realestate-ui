import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RealEstateManagementModalComponent } from '../modals/real-estate-management-modal/real-estate-management-modal.component';
import { RealEstateManagementApiService } from '../services/real-estate-management-api.service';
import { RealEstateHeader, RealEstateBody } from '../models/real-estate-management-model';
import { DeleteModalComponent } from '../modals/delete-real-estate-modal/delete-real-estate-modal.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-real-estate-management',
  templateUrl: './real-estate-management.component.html',
  styleUrl: './real-estate-management.component.css'
})

export class RealEstateManagementComponent{
  realEstatesHeaderList$: Observable<RealEstateHeader[]>
  realEstateBody: RealEstateBody | undefined

  constructor(private modalService: NgbModal, private apiService: RealEstateManagementApiService){}

  ngOnInit(): void {
    this.realEstatesHeaderList$ = this.apiService.getAllRealEstates();
  }

  getRealEstateBody(realEstateId: number) {
    this.apiService.getRealEstateById(realEstateId).subscribe(response => {
      this.realEstateBody = response
    })
  }

  deleteModal(realEstateId: number){
    var response = this.modalService.open(DeleteModalComponent, {
      keyboard: false
    })
    response.componentInstance.realEstateId = realEstateId;
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