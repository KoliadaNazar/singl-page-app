import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { DomBannerComponent } from './dom-banner/dom-banner.component';




@Component({
  selector: 'app-dom-page',
  imports: [RouterOutlet, RouterLink,
            DomBannerComponent


  ],

  templateUrl: './dom-page.component.html',
  styleUrl: './dom-page.component.scss'
})


export class DomPageComponent {

}
