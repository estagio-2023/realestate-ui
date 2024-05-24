import { Component } from '@angular/core';
import { CustomerApiService } from '../../services/customer-api.service';
import { CustomerModel } from '../../../common/models/customer-management-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerManagementModalComponent } from '../../modals/customer-management-modal/customer-management-modal.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrl: './customer-management.component.css'
})

export class CustomerManagementComponent {
  customers$: Observable<CustomerModel[]>

  constructor(private apiService: CustomerApiService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadCustomerData()
  }

  loadCustomerData() {
    this.customers$ = this.apiService.getAllCustomerData();
  }
  openAddCustomerModal() {
    var response = this.modalService.open(CustomerManagementModalComponent, {
      keyboard: false
    });

    response.result.then((data) => {
      if (data != null) {
        this.loadCustomerData();
      }
    })
  }
}