import { Component } from '@angular/core';
import { CustomerApiService } from '../services/customer-api.service';
import { CustomerModel } from '../models/customer-management-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerManagementModalComponent } from '../modals/customer-management-modal/customer-management-modal.component';
import { ViewCustomerComponent } from '../view-customer/view-customer.component';

@Component({
  selector: 'app-customer-management',
  //standalone: true,
  //imports: [ViewCustomerComponent],
  templateUrl: './customer-management.component.html',
  styleUrl: './customer-management.component.css'
})

export class CustomerManagementComponent {
  customers: CustomerModel[]

  constructor(private apiService: CustomerApiService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadCUstomerData()
  }

  loadCUstomerData() {
    this.apiService.getAllCustomerData().subscribe(response => {
      this.customers = response
    })
  }
  openAddCustomerModal() {
    var response = this.modalService.open(CustomerManagementModalComponent, {
      keyboard: false
    });

    response.result.then((data) => {
      if (data != null) {
        this.loadCUstomerData();
      }
    }
    )
  }
}
