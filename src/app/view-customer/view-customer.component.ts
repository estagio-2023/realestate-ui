//import { Component } from '@angular/core';
import { Component, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-view-customer',
  //standalone: true,
  //imports: [],
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.css'
})

export class ViewCustomerComponent {
  @Input() name = ''; 
  @Input() password = '';
  @Input() email = '';
}

