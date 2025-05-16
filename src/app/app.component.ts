
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

  ngOnInit(): void {
    const loader = document.getElementById('app-preloader');
    if (loader) {
      loader.classList.add('preloader--loaded');
      setTimeout(() => loader.remove(), 500); // убрать из DOM
    }
  }


  title = 'singl-page-app';

  constructor(private router: Router) {
    this.router.navigateByUrl('/');
  }
}