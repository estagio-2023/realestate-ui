import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerModel } from '../models/customer-management-model';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {

  baseUrl = "http://localhost:5152/";

  constructor(private httpCLient: HttpClient) {}

  getAllCustomerData() : Observable<CustomerModel[]>{
    return this.httpCLient.get<CustomerModel[]>(this.baseUrl + 'Customer')
  }
}
