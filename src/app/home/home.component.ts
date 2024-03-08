import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'home-page',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  buttonsFirstLine: homeButtons[] = [
    {
      img: '../../assets/home_page_icons/properties.png',
      imgTitle: 'Properties'
    },
    {
      img: '../../assets/home_page_icons/sellers.png',
      imgTitle: 'Sellers'
    },
    {
      img: '../../assets/home_page_icons/customers.png',
      imgTitle: 'Customers'
    }
  ]

  buttonsSecondLine: homeButtons[] = [
    {
      img: '../../assets/home_page_icons/visit.png',
      imgTitle: 'Visit'
    },
    {
      img: '../../assets/home_page_icons/reference.png',
      imgTitle: 'Reference'
    },
    {
      img: '../../assets/home_page_icons/options.png',
      imgTitle:'Options'
    }
  ]
}

interface homeButtons {
  img: string,
  imgTitle: string
}
