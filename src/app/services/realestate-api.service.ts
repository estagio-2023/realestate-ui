import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RefrenceDataResponseDto } from '../dto/ReferenceDataResponseDto';
import { ReferenceDataModalComponent } from '../modals/reference-data-modal/reference-data-modal.component';



@Injectable({
  providedIn: 'root'
})
export class RealestateApiService {

  baseUrl = "http://localhost:5152/";

  constructor(private httpClient: HttpClient) {}

  getAllReferenceData() : Observable<RefrenceDataResponseDto> {
    return this.httpClient.get<RefrenceDataResponseDto>(this.baseUrl + 'ReferenceData')
  }


  addReferenceData(selectedRefDataModalType: string,selectedRefDataModalDescription : string){
    return this.httpClient.post(this.baseUrl + 'ReferenceData/' + selectedRefDataModalType, selectedRefDataModalDescription);
  }
}