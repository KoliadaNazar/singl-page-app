import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { GitPageComponent } from './git-page/git-page.component';
import { DomPageComponent } from './dom-page/dom-page.component';
import { BrowserComponent  } from './browser/browser.component';
import { PersonalPageComponent } from './personal-page/personal-page.component';
import { ImagesPageComponent } from './images-page/images-page.component';
import { CssPageComponent } from './css-page/css-page.component';


@Component({
  selector: 'app-main',
  imports: [
    RouterOutlet, RouterLink,
    HomeLayoutComponent,
    GitPageComponent,
    DomPageComponent,
    BrowserComponent,
    PersonalPageComponent,
    ImagesPageComponent,
    CssPageComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent {

}
