import { Component } from '@angular/core';
import { HtmlHeroBannerComponent } from './html-hero-banner/html-hero-banner.component';




@Component({
  selector: 'app-html-page',
  imports: [
    HtmlHeroBannerComponent
  ],
  templateUrl: './html-page.component.html',
  styleUrl: './html-page.component.scss'
})
export class HtmlPageComponent {

}
