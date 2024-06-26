import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VisitRequestModel } from '../../common/models/visit-request-model';
import { VisitRequestAvailabilityDto } from '../../common/dto/visit-request-availability-dto';

@Injectable({
  providedIn: 'root'
})
export class VisitRequestService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  baseUrl = "http://localhost:5152/";

  constructor(private httpClient: HttpClient) {}

  getAllVisitRequest(): Observable<VisitRequestModel[]> {
    return this.httpClient.get<VisitRequestModel[]>(this.baseUrl + "VisitRequest")
  }

  getAllVisitRequestByRealEstateId(realEstateId: number): Observable<VisitRequestModel[]> {
    return this.httpClient.get<VisitRequestModel[]>(this.baseUrl + "VisitRequest/RealEstate/" + realEstateId)
  }

  getVisitRequestById(visitRequestId: number): Observable<VisitRequestModel[]> {
    return this.httpClient.get<VisitRequestModel[]>(this.baseUrl + "VisitRequest/" + visitRequestId)
  }

  updateVisitRequestConfirmationById(visitRequestId: number): Observable<VisitRequestModel[]> {
    return this.httpClient.put<VisitRequestModel[]>(this.baseUrl + "VisitRequest/" + visitRequestId + "/Confirmation", this.httpOptions);
  }  

    addVisitRequest(visitRequest: any) {
      return this.httpClient.post<VisitRequestModel>(this.baseUrl + 'VisitRequest/', visitRequest, this.httpOptions)
    }

    getVisitRequestAvailability(visitRequestData: VisitRequestAvailabilityDto) {
      return this.httpClient.get(this.baseUrl + "VisitRequest/" + "Availability", {
        params: { 
          date: visitRequestData.date,
          startTime: visitRequestData.startTime,
          endTime: visitRequestData.endTime,
          realEstateId: visitRequestData.realEstateId,
          agentId: visitRequestData.agentId
        }
      } )
    }
}