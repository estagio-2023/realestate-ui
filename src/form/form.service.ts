import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
NgbModal

export const referenceDataForm = new FormGroup({
  type: new FormControl('', [Validators.required]),
  description: new FormControl('', [Validators.required]),
});

export const customerForm = new FormGroup({
  name: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required]),
  password: new FormControl('', [Validators.required]),
});

export const realEstateForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required,]),
    zipCode: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    buildDate: new FormControl('', [Validators.required]),
    squareMeters: new FormControl('', [Validators.required]),
    energyClass: new FormControl('', [Validators.required]),
    customer: new FormControl('', [Validators.required]),
    agent: new FormControl('', [Validators.required]),
    realEstateType: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    typology: new FormControl('', [Validators.required]),
    amenities: new FormControl('', []),
    price: new FormControl('', [Validators.required])
  })
