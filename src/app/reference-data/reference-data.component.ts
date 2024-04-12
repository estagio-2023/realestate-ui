import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReferenceDataModalComponent } from '../modals/reference-data-modal/reference-data-modal.component';
import { RealestateApiService } from '../services/realestate-api.service';
import { ReferenceDataResponseDto } from '../dto/referenceDataResponseDto';
import { ReferenceDataModel } from '../models/reference-data-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reference-data',
  templateUrl: './reference-data.component.html',
  styleUrl: './reference-data.component.css'
})
export class ReferenceDataComponent {
  referenceDataList$: Observable<ReferenceDataResponseDto>;
  referenceDataList: ReferenceDataModel[];

  constructor(private modalService: NgbModal, private apiService: RealestateApiService) { }

  ngOnInit(): void {
    this.apiService.getAllReferenceData().subscribe((referenceDataList$: any) => {
      this.referenceDataList = referenceDataList$.typologiesList;
    })
  }

  openModal() {
    this.modalService.open(ReferenceDataModalComponent, {
      keyboard: false
    });
  }

}