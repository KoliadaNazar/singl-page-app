import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header-subnav',
  imports: [],
  templateUrl: './header-subnav.component.html',
  styleUrl: './header-subnav.component.scss'
})
export class HeaderSubnavComponent {

  @ViewChild('submenuContainer', { static: true }) submenuContainer!: ElementRef;

  scrollLeft(): void {
    this.submenuContainer.nativeElement.scrollBy({ left: -110, behavior: 'smooth' });
  }

  scrollRight(): void {
    this.submenuContainer.nativeElement.scrollBy({ left: 110, behavior: 'smooth' });
  }
}


