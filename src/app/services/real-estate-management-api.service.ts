import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RealEstateHeader, RealEstateBody } from '../models/real-estate-management-model';

@Injectable({
  providedIn: 'root'
})
export class RealEstateManagementApiService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  baseUrl = "http://localhost:5152/";

  constructor(private httpClient: HttpClient) {}

  getAllRealEstates(): Observable<RealEstateBody[]> {
    return this.httpClient.get<RealEstateBody[]>(this.baseUrl + "RealEstate")
  }

  getRealEstateById(realEstateId: number): Observable<RealEstateBody> {
    return this.httpClient.get<RealEstateBody>(this.baseUrl + "RealEstate/" + realEstateId)
  }

  addRealEstateData(realEstate: any){
    return this.httpClient.post<RealEstateBody>(this.baseUrl + 'RealEstate/', realEstate, this.httpOptions)
  }

  deleteRealEstate(realEstateId: number) {
    return this.httpClient.delete(this.baseUrl + "RealEstate/" + realEstateId)
  }
}