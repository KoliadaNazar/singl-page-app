import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const burger = document.querySelector('.header__burger-icon');
    const close = document.querySelector('.header__burger-close');
  
    sidebar?.classList.toggle('sidebar--open');
    burger?.classList.toggle('burger-icon--hidden');
    close?.classList.toggle('burger-icon--hidden');
  }
}
