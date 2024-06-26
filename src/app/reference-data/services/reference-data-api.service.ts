import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReferenceDataResponseDto } from '../../common/dto/referenceDataResponseDto';
import { ReferenceDataModel } from '../../common/models/reference-data-model';

@Injectable({
  providedIn: 'root'
})
export class ReferenceDataApiService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  baseUrl = "http://localhost:5152/";

  constructor(private httpClient: HttpClient) { }

  getAllReferenceData() : Observable<ReferenceDataResponseDto> {
    return this.httpClient.get<ReferenceDataResponseDto>(this.baseUrl + 'ReferenceData')
  }

  getRefDataById(RefDataType: string, refDataId: number): Observable<ReferenceDataModel> {
    return this.httpClient.get<ReferenceDataModel>(`${this.baseUrl}ReferenceData/${RefDataType}/${refDataId}`);
  }

  addReferenceData(selectedRefDataModalType: string, addRefDataValueForm: any) {
    return this.httpClient.post(this.baseUrl + 'ReferenceData/' + selectedRefDataModalType, addRefDataValueForm, this.httpOptions);
  }

  deleteReferenceData(refDataType: string, refDataId: number) {
    return this.httpClient.delete(this.baseUrl + "ReferenceData/" + refDataType + "/" + refDataId)
  }
}