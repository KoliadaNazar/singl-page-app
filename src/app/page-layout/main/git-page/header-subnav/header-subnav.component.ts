import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-header-subnav',
  imports: [],
  templateUrl: './header-subnav.component.html',
  styleUrl: './header-subnav.component.scss'
})



export class HeaderSubnavComponent {


  scrollToBanner(bannerId: string) {
    const yOffset = -86; // смещение на 76 пикселей
    const element = document.getElementById(bannerId);
    const yPosition = element ? element.getBoundingClientRect().top + window.pageYOffset + yOffset : 0;
    window.scrollTo({ top: yPosition, behavior: 'smooth' });
  }


  @ViewChild('submenuContainer', { static: true }) submenuContainer!: ElementRef;

  scrollLeft(): void {
    this.submenuContainer.nativeElement.scrollBy({ left: -110, behavior: 'smooth' });
  }

  scrollRight(): void {
    this.submenuContainer.nativeElement.scrollBy({ left: 110, behavior: 'smooth' });
  }


}


