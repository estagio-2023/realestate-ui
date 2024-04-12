import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReferenceDataResponseDto } from '../dto/referenceDataResponseDto';
import { CustomerModel } from '../models/customer-management-model';

@Injectable({
  providedIn: 'root'
})
export class RealestateApiService {

  baseUrl = "http://localhost:5152/";

  constructor(private httpCLient: HttpClient) {}

  getAllReferenceData() : Observable<ReferenceDataResponseDto> {
    return this.httpCLient.get<ReferenceDataResponseDto>(this.baseUrl + 'ReferenceData')
  }

  getAllCustomerData() : Observable<Array<CustomerModel>>{
    return this.httpCLient.get<Array<CustomerModel>>(this.baseUrl + 'Customer')
  }
}