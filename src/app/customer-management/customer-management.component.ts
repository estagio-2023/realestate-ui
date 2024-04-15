import { Component } from '@angular/core';
import { CustomerApiService } from '../services/customer-api.service';
import { CustomerModel } from '../models/customer-management-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerManagementModalComponent } from '../modals/customer-management-modal/customer-management-modal.component';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrl: './customer-management.component.css'
})

export class CustomerManagementComponent {
  customers: CustomerModel[]

  constructor( private apiService: CustomerApiService, private modalService:NgbModal){}
  
  ngOnInit(): void {
    this.apiService.getAllCustomerData().subscribe(response => {
      this.customers = response
    })
  }
  openModal(){
    this.modalService.open(CustomerManagementModalComponent, {
      keyboard: false
    });
  }
}
