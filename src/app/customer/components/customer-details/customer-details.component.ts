import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerApiService } from '../../services/customer-api.service';
import { CustomerModel } from '../../../common/models/customer-model';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { DeleteValidationModalComponent } from '../../../common/modals/delete-validation-modal/delete-validation-modal.component';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class ViewCustomerComponent implements OnInit {
  customerData$: Observable<CustomerModel>;
  customerId: number;
  isPasswordVisible: boolean = false;
  iconClass: string = 'bi-eye';

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: CustomerApiService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.customerId = params['id'];
    });
    this.loadCustomerData();
  }

  loadCustomerData() {
    this.customerData$ = this.apiService.getCustomerById(this.customerId);
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.iconClass = this.isPasswordVisible ? 'bi-eye-slash' : 'bi-eye';
  }

  deleteCustomer(customerId: number) {
    var response2 = this.modalService.open(DeleteValidationModalComponent, {
      keyboard: false
    });
  }

  generateDotString(length: number): string {
    return '•'.repeat(length);
  }
}