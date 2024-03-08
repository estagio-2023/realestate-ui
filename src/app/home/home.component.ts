import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { homeButtons } from '../modules/home-butttons';
@Component({
  selector: 'home-page',
  standalone: true,
  imports: [RouterModule, CommonModule],
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
          title: "Visit",
          imgPath: "../../assets/home_page_icons/visit.png",
        },
        {
          title: "Reference",
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