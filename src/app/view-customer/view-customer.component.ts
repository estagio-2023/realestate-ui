import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerApiService } from '../services/customer-api.service';
import { CustomerModel } from '../models/customer-management-model';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.css'
})

export class ViewCustomerComponent implements OnInit {
  @Input() name = ''; 
  @Input() password = '';
  @Input() email = '';
  customerData: CustomerModel
  customerId: number;

  constructor(private activatedRoute: ActivatedRoute, private apiService: CustomerApiService){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.customerId = params['id'];
    });
    this.apiService.getCustomerById(this.customerId).subscribe(response => {
      this.customerData = response
    });
  }
}