import { Component } from '@angular/core';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { GitSectionComponent } from './git-section/git-section.component';
import { HeaderSubnavComponent } from './header-subnav/header-subnav.component';



@Component({
  selector: 'app-git-page',
  imports: [
    HeroBannerComponent,
    GitSectionComponent,
    HeaderSubnavComponent
  ],
  templateUrl: './git-page.component.html',
  styleUrl: './git-page.component.scss'
})
export class GitPageComponent {

}
