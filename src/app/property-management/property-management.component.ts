import { Component, OnInit } from '@angular/core';
import { optionForm } from '../../form/form.service';

@Component({
  selector: 'app-property-management',
  templateUrl: './property-management.component.html',
  styleUrl: './property-management.component.css'
})
export class PropertyManagementComponent implements OnInit{

form = optionForm

constructor() 
{
  this.form = optionForm
}

ngOnInit(): void {
  
  console.log(this.form.controls)
}

}
