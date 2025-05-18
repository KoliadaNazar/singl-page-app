import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { GitRoleComponent } from './git-role/git-role.component';
import { HeaderSubnavComponent } from './header-subnav/header-subnav.component';
import { GitRepoBannerComponent } from './git-repo-banner/git-repo-banner.component';
import { GitRepositoriesComponent } from './git-repositories/git-repositories.component';
import { GitCommandsComponent } from './git-commands/git-commands.component';
import { GitStagesComponent } from './git-stages/git-stages.component';
import { GitWorkflowComponent } from './git-workflow/git-workflow.component';




@Component({
  selector: 'app-git-page',
  imports: [
    RouterOutlet, RouterLink,
    HeroBannerComponent,
    GitRoleComponent,
    HeaderSubnavComponent,
    GitRepoBannerComponent,
    GitRepositoriesComponent,
    GitCommandsComponent,
    GitStagesComponent,
    GitWorkflowComponent
  ],
  templateUrl: './git-page.component.html',
  styleUrl: './git-page.component.scss'
})
export class GitPageComponent {

}
