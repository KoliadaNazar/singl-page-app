import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { GitPageComponent } from './git-page/git-page.component';
import { DomPageComponent } from './dom-page/dom-page.component';
import { BrowserComponent  } from './browser/browser.component';


@Component({
  selector: 'app-main',
  imports: [
    RouterOutlet, RouterLink,
    HomeLayoutComponent,
    GitPageComponent,
    DomPageComponent,
    BrowserComponent 
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent {

}
