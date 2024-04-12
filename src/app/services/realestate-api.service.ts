import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReferenceDataResponseDto } from '../dto/referenceDataResponseDto';

@Injectable({
  providedIn: 'root'
})
export class RealestateApiService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  baseUrl = "http://localhost:5152/";

  constructor(private httpClient: HttpClient) { }

  getAllReferenceData() : Observable<ReferenceDataResponseDto> {
    return this.httpClient.get<ReferenceDataResponseDto>(this.baseUrl + 'ReferenceData')
  }
}