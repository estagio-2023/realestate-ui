import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
NgbModal

export const referenceDataForm = new FormGroup({
  type: new FormControl('', [Validators.required]),
  description: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
});

export const customerForm = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
  email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(8), Validators.maxLength(150)]),
  password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]),
});

export const realEstateForm = new FormGroup({
  title: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100), Validators.pattern('^[^0-9]*$')]),
  address: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]),
  zipCode: new FormControl('', [ Validators.required, Validators.minLength(4), Validators.maxLength(8), Validators.pattern('^\\d{4}-\\d{3}$')]),
  description: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]),
  buildDate: new FormControl<number>(1900, [Validators.required]),
  squareMeter: new FormControl<number>(0, [Validators.required, Validators.min(1)]),
  energyClass: new FormControl('', [Validators.required]),
  customerId: new FormControl<number>(0, [Validators.required]),
  agentId: new FormControl<number>(0, [Validators.required]),
  realEstateTypeId: new FormControl<number>(0, [Validators.required]),
  cityId: new FormControl<number>(0, [Validators.required]),
  typologyId: new FormControl('', [Validators.required]),
  amenitiesId: new FormControl<number>(0, []),
  price: new FormControl<number>(0, [Validators.required, Validators.min(1)])
});

export const agentForm = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
  email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(8), Validators.maxLength(150)]),
  phoneNumber: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(13), Validators.pattern(/^\+\d{9,12}$/)
  ]),
});

export const visitRequestForm = new FormGroup({
  date: new FormControl('', [Validators.required]),
  startTime: new FormControl('', [Validators.required]),
  endTime: new FormControl('', [Validators.required]),
  agentId: new FormControl<number>(0, [Validators.required]),
  name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]),
  email: new FormControl('', [Validators.required, Validators.email]),
});