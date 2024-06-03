import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AgentModel } from '../../../../common/models/agent-model';
import { AgentService } from '../../../../agent/services/agent.service';
import { VisitRequestService } from '../../../services/visit-request.service';
import { ToastService } from '../../../../common/services/toast-service/toast.service';
import { ToastClassEnum } from '../../../../common/enums/toast-class-enum';
import { RealEstateHeader } from '../../../../common/models/real-estate-management-model';
import { RealEstateManagementApiService } from '../../../../realestate/services/real-estate-management-api.service';
import { visitRequestForm } from '../../../../common/services/form/form.service';
import { VisitRequestAvailabilityModel, VisitRequestModel } from '../../../../common/models/visit-request-model';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-visit-request-management-modal',
  templateUrl: './visit-request-management-modal.component.html',
  styleUrls: ['./visit-request-management-modal.component.css']
})
export class VisitRequestManagementModalComponent {
  form = visitRequestForm;
  minDate: string;
  agents: AgentModel[];
  realestates: RealEstateHeader[];
  times: string[] = [];
  endTimes: string[] = [];
  filteredEndTimes: string[] = [];
  startTime: string;
  endTime: string;
  date: string;
  visitRequestModel: VisitRequestModel
  isAvailable: boolean = false
  visitRequestModelAvailability: VisitRequestAvailabilityModel
  realEstateId: number
 


  constructor(
    public activeModal: NgbActiveModal,
    private agentService: AgentService,
    private realEstateManagementApiService: RealEstateManagementApiService,
    private visitRequestService: VisitRequestService,
    private toastService: ToastService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.realEstateId = params['id'];
      console.log(params)
    });
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];

    for (let hour = 9; hour < 20; hour++) {
      const timeString = hour < 10 ? `0${hour}:00` : `${hour}:00`;
      this.times.push(timeString);
      this.endTimes.push(timeString);
    }
    this.endTimes.push('20:00');
  }

  ngOnInit(): void {
    

    this.agentService.getAllAgentData().subscribe(response => {
      this.agents = response.filter(agent => agent.name);
    });

    this.realEstateManagementApiService.getAllRealEstates().subscribe(response => {
      this.realestates = response.filter(realestate => realestate.title);
    });

    this.filteredEndTimes = [...this.times];

    this.subscribeFormChanges()
  }

  subscribeFormChanges() {
    this.form.valueChanges.subscribe(formData => {
      if (formData.date != null && formData.startTime != null && formData.endTime != null && formData.agentId != null && this.realEstateId != 0 && !this.isAvailable) {
        const visitRequestData: VisitRequestAvailabilityModel = {
          date: formData.date,
          startTime: formData.startTime,
          endTime: formData.endTime,
          agentId: formData.agentId,
          realEstateId: this.realEstateId
        };

        this.visitRequestService.getAllVisitRequestAvailability(visitRequestData).subscribe({
          next: (value) => {
            this.isAvailable = true
          },
          error: (err) => {
            this.isAvailable = false
          }
        });
      }
    });
  }

  updateEndTimes() {
    const startTimeControlValue = this.form.get('startTime')?.value;
    if (startTimeControlValue) {
      this.filteredEndTimes = this.endTimes.filter(endTime => endTime > startTimeControlValue);
    }
  }

  closeModal(result: any) {
    this.activeModal.close(result);
    this.form.reset();
  }

  addVisitRequest() {
    this.visitRequestService.addVisitRequest(this.form.value).subscribe({
      next: value => {
        this.toastService.show('Visit Request added successfully!', ToastClassEnum.success);
        this.closeModal(value);
      },
      error: err => {
        this.toastService.show('Error in adding Visit Request', ToastClassEnum.error);
      }
    });
  }
}