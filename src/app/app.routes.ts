import { Routes } from '@angular/router';

import { GitPageComponent } from './page-layout/main/git-page/git-page.component';
import { DomPageComponent } from './page-layout/main/dom-page/dom-page.component';
import { BrowserComponent } from './page-layout/main/browser/browser.component';
import { HomeLayoutComponent } from './page-layout/main/home-layout/home-layout.component';
import { PersonalPageComponent } from './page-layout/main/personal-page/personal-page.component';


export const routes: Routes = [
  

  {
    path: '', 
     component: HomeLayoutComponent,
     pathMatch: 'full'
  },

   { 
    path: 'personal-page',
    component: PersonalPageComponent
  },


  { 
    path: 'git-page',
    component: GitPageComponent
  },

   { 
    path: 'browser',
    component: BrowserComponent
  },

  { 
    path: 'dom-page',
    component: DomPageComponent
  },

  
  { path: '**', redirectTo: '' } 
];
