import { Component, OnInit } from '@angular/core';
import { propertyForm } from '../../form/form.service';

@Component({
  selector: 'app-property-management',
  templateUrl: './property-management.component.html',
  styleUrl: './property-management.component.css'
})
export class PropertyManagementComponent implements OnInit{

form = propertyForm

constructor() 
{
  this.form = propertyForm
}

ngOnInit(): void {
  
  console.log(this.form.controls.title)
}

saveTest()
{
  console.log(this.form.controls.title.errors)
  console.log("Resultado: ", this.form.controls.title.hasError('required'))
}

submitForm() {
  if (this.form.invalid) {
    return;
  }
  alert("Email sent with success!")
}


}
