
import { RouterOutlet } from '@angular/router';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    PageLayoutComponent,
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})



export class AppComponent {
  title = 'singl-page-app';

  constructor(private router: Router) {
    this.router.navigateByUrl('/');
  }
}