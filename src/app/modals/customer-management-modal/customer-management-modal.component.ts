import { Component, OnInit } from '@angular/core';
import { customerForm } from '../../../form/form.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerApiService } from '../../services/customer-api.service';
import { CustomerModel } from '../../models/customer-management-model';

@Component({
  selector: 'app-customer-management-modal',
  templateUrl: './customer-management-modal.component.html',
  styleUrls: ['./customer-management-modal.component.css']
})
export class CustomerManagementModalComponent implements OnInit {
  form = customerForm;
  customers: CustomerModel[];

  constructor(public activeModal: NgbActiveModal, private apiService: CustomerApiService) {}

  ngOnInit(): void {
    this.apiService.getAllCustomerData().subscribe(response => {
      this.customers = response;
    });
  }

  closeModal() {
    this.activeModal.close();
    this.form.reset();
  }
}
