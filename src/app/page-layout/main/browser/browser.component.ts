import { Component } from '@angular/core';
import { BrowserBannerComponent } from './browser-banner/browser-banner.component';
import { PageLoadSectionComponent } from './page-load-section/page-load-section.component';




@Component({
  selector: 'app-browser',
  imports: [BrowserBannerComponent ,
            PageLoadSectionComponent

  ],
  templateUrl: './browser.component.html',
  styleUrl: './browser.component.scss'
})
export class BrowserComponent {

}
