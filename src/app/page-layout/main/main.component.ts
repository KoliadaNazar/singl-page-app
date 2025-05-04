import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { GitPageComponent } from './git-page/git-page.component';


@Component({
  selector: 'app-main',
  imports: [
    RouterOutlet, RouterLink,
    HomeLayoutComponent,
    GitPageComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent {

}
