import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReferenceDataResponseDto } from '../dto/referenceDataResponseDto';
import { CustomerManagementResponseDto } from '../dto/customerManagementDataResponseDto';

@Injectable({
  providedIn: 'root'
})
export class RealestateApiService {

  baseUrl = "http://localhost:5152/";

  constructor(private httpCLient: HttpClient) {}

  getAllReferenceData() : Observable<ReferenceDataResponseDto> {
    return this.httpCLient.get<ReferenceDataResponseDto>(this.baseUrl + 'ReferenceData')
  }

  getAllCustomerData() : Observable<CustomerManagementResponseDto>{
    return this.httpCLient.get<CustomerManagementResponseDto>(this.baseUrl + 'Customer')
  }
}