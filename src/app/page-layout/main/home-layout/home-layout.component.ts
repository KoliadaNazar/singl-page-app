import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';


import { MainSliderComponent } from './main-slider/main-slider.component';
import { SmallMenuComponent } from './small-menu/small-menu.component';
import { TechCardsComponent } from './tech-cards/tech-cards.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { InfoCardsComponent } from './info-cards/info-cards.component';
import { ServiceBannerComponent } from './service-banner/service-banner.component';
import { PortfolioCardsComponent } from './portfolio-cards/portfolio-cards.component';




@Component({
  selector: 'app-home-layout',
  imports: [ RouterOutlet, RouterLink,
    MainSliderComponent,
    SmallMenuComponent,
    TechCardsComponent,
    HomeBannerComponent,
    InfoCardsComponent,
    ServiceBannerComponent,
    PortfolioCardsComponent

  ],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent {

}
