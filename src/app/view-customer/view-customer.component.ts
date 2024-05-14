//import { Component } from '@angular/core';
import { Component, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-customer',
  //standalone: true,
  //imports: [],
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







