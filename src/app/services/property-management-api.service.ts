import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyHeader, PropertyBody } from '../models/property-management-model';

@Injectable({
  providedIn: 'root'
})
export class PropertyManagementApiService {

  baseUrl = "http://localhost:5152/";

  constructor(private httpClient: HttpClient) {}

  getAllProperties(): Observable<PropertyHeader[]> {
    return this.httpClient.get<PropertyHeader[]>(this.baseUrl + "RealEstate")
  }

  getPropertyById(propertyId: number): Observable<PropertyBody> {
    return this.httpClient.get<PropertyBody>(this.baseUrl + "RealEstate/" + propertyId)
  }
}