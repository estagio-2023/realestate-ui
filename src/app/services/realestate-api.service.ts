import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RefrenceDataResponseDto } from '../dto/ReferenceDataResponseDto';

@Injectable({
  providedIn: 'root'
})
export class RealestateApiService {

  baseUrl = "http://localhost:5152/";

  constructor(private httpCLient: HttpClient) {}

  getAllReferenceData() : Observable<RefrenceDataResponseDto> {
    return this.httpCLient.get<RefrenceDataResponseDto>(this.baseUrl + 'ReferenceData')
  }
}