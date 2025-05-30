import { Component } from '@angular/core';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';



@Component({
  selector: 'app-images-page',
  imports: [HeroBannerComponent,

  ],
  templateUrl: './images-page.component.html',
  styleUrl: './images-page.component.scss'
})
export class ImagesPageComponent {

}
