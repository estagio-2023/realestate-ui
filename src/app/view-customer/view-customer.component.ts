//import { Component } from '@angular/core';
import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.css'
})


export class ViewCustomerComponent implements OnInit {
  @Input() name = ''; 
  @Input() password = '';
  @Input() email = '';

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
    
      console.log(`${id}`);
      });
  }
  
}







