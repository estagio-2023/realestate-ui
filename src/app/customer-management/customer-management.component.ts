import { Component } from '@angular/core';
import { CustomerApiService } from '../services/customer-api.service';
import { CustomerModel } from '../models/customer-management-model';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrl: './customer-management.component.css'
})

export class CustomerManagementComponent {
  customers: CustomerModel[]

  constructor( private apiService: CustomerApiService){}
  
ngOnInit(): void {
  this.apiService.getAllCustomerData().subscribe(response => {
    this.customers = response
  })
}
}
