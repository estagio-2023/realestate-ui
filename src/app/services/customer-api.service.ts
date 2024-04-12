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

  getAllCustomerData() : Observable<Array<CustomerModel>>{
    return this.httpCLient.get<Array<CustomerModel>>(this.baseUrl + 'Customer')
  }
}