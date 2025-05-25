import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})


export class FooterComponent {
  toggleMenu(event: Event): void {
    const button = event.target as HTMLElement;
    const menuItem = button.closest('.footer__grid-item');
    
    if (!menuItem) return;
  
    const menu = menuItem.querySelector('.footer__nav-list');
    const arrow = button.querySelector('.arrow-icon');
    
    // Переключаем классы (без Angular-специфики)
    menu?.classList.toggle('navigation__list--active');
    arrow?.classList.toggle('rotated');
  }
}
