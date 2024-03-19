import { FormControl, FormGroup, Validators } from "@angular/forms";

export const propertyForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required,]),
    postalCode: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    constructionYear: new FormControl('', [Validators.required]),
    squareMeters: new FormControl('', [Validators.required]),
    energeticClass: new FormControl('', [Validators.required]),
    customer: new FormControl('', [Validators.required]),
    seller: new FormControl('', [Validators.required]),
    propertyType: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    typology: new FormControl('', [Validators.required]),
    amenities: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required])
  })
