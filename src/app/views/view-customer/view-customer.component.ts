import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerApiService } from '../../services/customer-api.service';
import { CustomerModel } from '../../models/customer-management-model';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteAgentValidationModalComponent } from '../../modals/delete-agent-validation-modal/delete-agent-validation-modal.component';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.css'
})

export class ViewCustomerComponent implements OnInit {
  customerData$: Observable<CustomerModel> 
  customerId: number;
  
  constructor(private activatedRoute: ActivatedRoute, private apiService: CustomerApiService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.customerId = params['id'];
    });
    
    this.loadCustomerData();
  }

  loadCustomerData(){
    this.customerData$ = this.apiService.getCustomerById(this.customerId);
  }

  deleteCustomer(customerId: number){
    var response2 = this.modalService.open(DeleteAgentValidationModalComponent, {
      keyboard: false
    })
  }
}