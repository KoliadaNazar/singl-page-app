import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  onRegisterClick() {
    const modal = document.querySelector('.modal-overlay') as HTMLElement;
    if (modal) {
      modal.style.display = 'block';
      document.body.classList.add('no-scroll');
    }
  }




  toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const burger = document.querySelector('.header__burger-icon');
    const close = document.querySelector('.header__burger-close');
  
    sidebar?.classList.toggle('sidebar--open');
    burger?.classList.toggle('burger-icon--hidden');
    close?.classList.toggle('burger-icon--hidden');

  }

  ngAfterViewInit() {
    const navLinks = document.querySelectorAll('.nav-list__link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar?.classList.contains('sidebar--open')) {
          this.toggleSidebar();
        }
      });
    });
  }
  
}
