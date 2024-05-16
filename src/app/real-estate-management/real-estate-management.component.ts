import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RealEstateManagementModalComponent } from '../modals/real-estate-management-modal/real-estate-management-modal.component';
import { RealEstateManagementApiService } from '../services/real-estate-management-api.service';
import { RealEstateHeader, RealEstateBody } from '../models/real-estate-management-model';
import { DeleteModalComponent } from '../modals/delete-real-estate-modal/delete-real-estate-modal.component';
import { Observable, of, forkJoin } from 'rxjs';
import { ReferenceDataApiService } from '../services/reference-data-api.service';
import { ReferenceDataModel } from '../models/reference-data-model';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-real-estate-management',
  templateUrl: './real-estate-management.component.html',
  styleUrl: './real-estate-management.component.css'
})
export class RealEstateManagementComponent implements OnInit {
  realEstatesHeaderList$: Observable<RealEstateHeader[]>;
  realEstatesHeaderList: RealEstateHeader[];
  realEstateHeader: RealEstateHeader[];
  realEstateBody: RealEstateBody | undefined;
  cities: { [key: number]: string } = {};
  typologies: { [key: number]: string } = {};
  private refDataCache = new Map<string, Observable<string>>();

  constructor(private modalService: NgbModal, private apiService: RealEstateManagementApiService, public refDataApiService: ReferenceDataApiService) { }

  ngOnInit(): void {
    this.loadRealEstateData();

    this.realEstatesHeaderList$.subscribe(response => {
      this.realEstatesHeaderList = response;
      this.preFetchReferenceData(response);
    });
  }

  preFetchReferenceData(realEstates: RealEstateHeader[]): void {
    const cityIds = Array.from(new Set(realEstates.map(re => re.cityId)));
    const typologyIds = Array.from(new Set(realEstates.map(re => re.typologyId)));

    const cityObservables = cityIds.map(id => this.getRefDataByTypeIdDescription('city', id).pipe(
      map(description => ({ id, description }))
    ));
    const typologyObservables = typologyIds.map(id => this.getRefDataByTypeIdDescription('typology', id).pipe(
      map(description => ({ id, description }))
    ));

    forkJoin([...cityObservables, ...typologyObservables]).subscribe(results => {
      results.forEach(result => {
        if (result.id in this.cities) {
          this.cities[result.id] = result.description;
        } else {
          this.typologies[result.id] = result.description;
        }
      });
    });
  }

  getRefDataByTypeIdDescription(type: string, id: number): Observable<string> {
    const cacheKey = `${type}-${id}`;
    if (this.refDataCache.has(cacheKey)) {
      return this.refDataCache.get(cacheKey)!;
    }

    const refData$ = this.refDataApiService.getRefDataById(type, id).pipe(
      map((response: ReferenceDataModel) => response.description),
      catchError(() => of(''))
    );

    this.refDataCache.set(cacheKey, refData$);
    return refData$;
  }

  getRealEstateBody(realEstateId: number) {
    this.apiService.getRealEstateById(realEstateId).subscribe(response => {
      this.realEstateBody = response;
    });
  }

  deleteModal(realEstateId: number) {
    var response = this.modalService.open(DeleteModalComponent, {
      keyboard: false
    });
    response.componentInstance.realEstateId = realEstateId;
  }

  loadRealEstateData() {
    this.realEstatesHeaderList$ = this.apiService.getAllRealEstates();
  }

  openModal() {
    var response = this.modalService.open(RealEstateManagementModalComponent, {
      keyboard: false
    });

    response.result.then((data) => {
      if (data != null) {
        this.loadRealEstateData();
      }
    });
  }
}