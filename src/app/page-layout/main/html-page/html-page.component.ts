import { Component } from '@angular/core';
import { HtmlHeroBannerComponent } from './html-hero-banner/html-hero-banner.component';
import { HtmlBasicsComponent } from './html-basics/html-basics.component';
import { HtmlMainInfoComponent } from './html-main-info/html-main-info.component';


@Component({
  selector: 'app-html-page',
  imports: [
    HtmlHeroBannerComponent,
    HtmlBasicsComponent,
    HtmlMainInfoComponent
  ],
  templateUrl: './html-page.component.html',
  styleUrl: './html-page.component.scss'
})
export class HtmlPageComponent {

}
