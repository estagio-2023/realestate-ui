import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerApiService } from '../../services/customer-api.service';
import { CustomerModel } from '../../../common/models/customer-model';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { DeleteValidationModalComponent } from '../../../common/modals/delete-validation-modal/delete-validation-modal.component';
import { ToastService } from '../../../common/services/toast-service/toast.service';
import { ToastClassEnum } from '../../../common/enums/toast-class-enum';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
})

export class ViewCustomerComponent implements OnInit {
  customerData$: Observable<CustomerModel> 
  customerId: number;
  isPasswordVisible: boolean = false;
  iconClass: string = 'bi-eye';
  
  constructor(private activatedRoute: ActivatedRoute, private apiService: CustomerApiService, private modalService: NgbModal, private router: Router, private toastService: ToastService){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.customerId = params['id'];
    });
    
    this.loadCustomerData();
  }

  loadCustomerData() {
    this.customerData$ = this.apiService.getCustomerById(this.customerId);
  }

  openDeleteModal(customerId: number){
    var response = this.modalService.open(DeleteValidationModalComponent, {
      keyboard: false
    })
    response.result.then(resp => {
      if(resp === 'confirm')
      {
        this.deleteCustomer(customerId)
      }
    })
  }

  deleteCustomer(customerId: number) {
    this.apiService.deleteCustomer(customerId).subscribe({
      next: (value) => {
        this.toastService.show('Customer successfully deleted', ToastClassEnum.success)
        this.loadCustomerData()
        this.router.navigate(['/customer'])
      },
      error: (err) =>
        this.toastService.show( 'Error in deleting customer data', ToastClassEnum.error)
    });
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.iconClass = this.isPasswordVisible ? 'bi-eye-slash' : 'bi-eye';
  }

  generateDotString(length: number): string {
    return '•'.repeat(length);
  }
}