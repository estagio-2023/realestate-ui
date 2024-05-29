import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
NgbModal

export const referenceDataForm = new FormGroup({
  type: new FormControl('', [Validators.required]),
  description: new FormControl('', [Validators.required]),
});

export const customerForm = new FormGroup({
  name: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required]),
});

export const realEstateForm = new FormGroup({
  title: new FormControl('', [Validators.required]),
  address: new FormControl('', [Validators.required,]),
  zipCode: new FormControl('', [Validators.required]),
  description: new FormControl('', [Validators.required]),
  buildDate: new FormControl<number>(1900, [Validators.required]),
  squareMeter: new FormControl<number>(0, [Validators.required]),
  energyClass: new FormControl('', [Validators.required]),
  customerId: new FormControl<number>(0, [Validators.required]),
  agentId: new FormControl<number>(0, [Validators.required]),
  realEstateTypeId: new FormControl<number>(0, [Validators.required]),
  cityId: new FormControl<number>(0, [Validators.required]),
  typologyId: new FormControl('', [Validators.required]),
  amenitiesId: new FormControl<number>(0, []),
  price: new FormControl('', [Validators.required])
});

  export const agentForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required]),
  });

  export const visitRequestForm = new FormGroup({
    date: new FormControl('', [Validators.required]),
    start_time: new FormControl('', [Validators.required]),
    end_time: new FormControl('', [Validators.required]),
    agentId: new FormControl<number>(0, [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    realestateId: new FormControl<number>(0, [Validators.required])
  });