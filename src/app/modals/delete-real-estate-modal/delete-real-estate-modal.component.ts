import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RealEstateManagementComponent } from '../../real-estate-management/real-estate-management.component';
import { ToastService } from '../../services/toast.service';
import { ToastClassEnum } from '../../enums/toast-class-enum';
import { RealEstateManagementApiService } from '../../services/real-estate-management-api.service';

@Component({
  selector: 'app-delete-real-estate-modal',
  templateUrl: './delete-real-estate-modal.component.html',
  styleUrl: './delete-real-estate-modal.component.css',
})

export class DeleteModalComponent {
  RealEstateComponent: RealEstateManagementComponent;
  realEstateId: number

  constructor(
    public activeModal: NgbActiveModal,
    private toastService: ToastService,
    private apiService: RealEstateManagementApiService
  ) {}

  ngOnInit(): void {}

  deleteRealEstateData() {
    this.apiService.deleteRealEstate(this.realEstateId).subscribe({
      next: (value) => {
        this.toastService.show('Real Estate successfully deleted', ToastClassEnum.success)
      },
      error: (err) =>
        this.toastService.show( 'Error in deleting real estate data', ToastClassEnum.error)
    });

    this.closeModal()
  }

  closeModal() {
    this.activeModal.close();
  }
}