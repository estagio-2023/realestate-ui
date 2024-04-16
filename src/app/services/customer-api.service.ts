import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerModel } from '../models/customer-management-model';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  baseUrl = "http://localhost:5152/";

  constructor(private httpClient: HttpClient) {}

  getAllCustomerData(): Observable<CustomerModel[]> {
    return this.httpClient.get<CustomerModel[]>(this.baseUrl + 'Customer');
  }

  addCustomerData(customer: any) {
    return this.httpClient.post<CustomerModel>(this.baseUrl + 'Customer/', customer, this.httpOptions);
  }
}
