import { Component,ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink,CommonModule ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
 
  @ViewChild('submenuCss', { static: false }) submenuCss!: ElementRef<HTMLElement>;
  @ViewChild('submenuImg', { static: false }) submenuImg!: ElementRef<HTMLElement>;


  toggleCssSubmenu() {
  this.submenuCss.nativeElement.classList.toggle('sidebar__submenu--open');
}

toggleImgSubmenu() {
  this.submenuImg.nativeElement.classList.toggle('sidebar__submenu--open');
}

  

}
