import { Component } from '@angular/core';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { GitRoleComponent } from './git-role/git-role.component';
import { HeaderSubnavComponent } from './header-subnav/header-subnav.component';
import { GitRepoBannerComponent } from './git-repo-banner/git-repo-banner.component';
import { GitRepositoriesComponent } from './git-repositories/git-repositories.component';
import { GitCommandsComponent } from './git-commands/git-commands.component';
import { RouterOutlet, RouterLink } from '@angular/router';





@Component({
  selector: 'app-git-page',
  imports: [
    RouterOutlet, RouterLink,
    HeroBannerComponent,
    GitRoleComponent,
    HeaderSubnavComponent,
    GitRepoBannerComponent,
    GitRepositoriesComponent,
    GitCommandsComponent
  ],
  templateUrl: './git-page.component.html',
  styleUrl: './git-page.component.scss'
})
export class GitPageComponent {

}
