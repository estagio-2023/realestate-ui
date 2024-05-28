import { Component, OnInit } from '@angular/core';
import { customerForm } from '../../../common/services/form/form.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerApiService } from '../../services/customer-api.service';
import { CustomerModel } from '../../../common/models/customer-model';
import { ToastService } from '../../../common/services/toast-service/toast.service';
import { ToastClassEnum } from '../../../common/enums/toast-class-enum';

@Component({
  selector: 'app-customer-management-modal',
  templateUrl: './customer-management-modal.component.html',
  styleUrls: ['./customer-management-modal.component.css']
})
export class CustomerManagementModalComponent implements OnInit {
  form = customerForm;
  customers: CustomerModel[];
  passwordFieldType: string = 'password';
  iconClass: string = 'bi-eye';

  constructor(public activeModal: NgbActiveModal, private apiService: CustomerApiService, private toastService: ToastService) { }

  ngOnInit(): void {
    this.apiService.getAllCustomerData().subscribe(response => {
      this.customers = response;
    });
  }

  closeModal(result: any) {
    this.activeModal.close(result);
    this.form.reset();
  }

  addCustomerData() {
    this.apiService.addCustomerData(this.form.value).subscribe({
      next: value => {
        this.toastService.show("Customer added successfully!", ToastClassEnum.success);
        this.closeModal(value);
      },
      error: err =>
        this.toastService.show("Error in adding customers", ToastClassEnum.error)
    });
  }

  togglePasswordVisibility(): void {
    if (this.passwordFieldType === 'password') {
      this.passwordFieldType = 'text';
      this.iconClass = 'bi-eye-slash';
    } else {
      this.passwordFieldType = 'password';
      this.iconClass = 'bi-eye';
    }
  }
}