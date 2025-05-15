import { Routes } from '@angular/router';

import { GitPageComponent } from './page-layout/main/git-page/git-page.component';
import { GitCommandsComponent } from './page-layout/main/git-page/git-commands/git-commands.component';
import { HomeLayoutComponent } from './page-layout/main/home-layout/home-layout.component';



export const routes: Routes = [
  

  {
    path: '', 
     component: HomeLayoutComponent,
     pathMatch: 'full'
  },


  { 
    path: 'git-page',
    component: GitPageComponent
  },

  
  { path: '**', redirectTo: '' } 
];
