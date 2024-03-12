import { Component } from '@angular/core';
import { homeButtons } from '../models/home-buttton-model';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  homeButtons: homeButtons[] = [
    {
      firstRow: [
        {
          title: "Properties",
          imgPath: "../../assets/home_page_icons/properties.png",
        },
        {
          title: "Sellers",
          imgPath: "../../assets/home_page_icons/sellers.png",
    
        },
        {
          title: "Customers",
          imgPath: "../../assets/home_page_icons/customers.png",
        }
      ],
      secondRow: [
        {
          title: "Visit Requests",
          imgPath: "../../assets/home_page_icons/visit.png",
        },
        {
          title: "Reference Data",
          imgPath: "../../assets/home_page_icons/reference.png",
        },
        {
          title: "Options",
          imgPath: "../../assets/home_page_icons/options.png",
        }
      ]
    }
  ]
}