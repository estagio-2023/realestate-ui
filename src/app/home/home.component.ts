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
          title: "Real Estates",
          imgPath: "../../assets/home_page_icons/real_estates.png",
          link: '/real-estates'
        },
        {
          title: "Agents",
          imgPath: "../../assets/home_page_icons/agents.png",
          link: '/agents'
        },
        {
          title: "Customers",
          imgPath: "../../assets/home_page_icons/customers.png",
          link: '/customer'
        }
      ],
      secondRow: [
        {
          title: "Visit Requests",
          imgPath: "../../assets/home_page_icons/visit.png",
          link: ''
        },
        {
          title: "Reference Data",
          imgPath: "../../assets/home_page_icons/reference.png",
          link: '/reference-data'
        },
        {
          title: "Options",
          imgPath: "../../assets/home_page_icons/options.png",
          link: ''
        }
      ]
    }
  ]
}