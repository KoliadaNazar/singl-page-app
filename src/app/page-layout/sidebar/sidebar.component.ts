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
isCssSubmenuOpen = false; // Добавляем состояние для CSS сабменю

toggleCssSubmenu() {
  this.submenuCss.nativeElement.classList.toggle('sidebar__submenu--open');
  this.isCssSubmenuOpen = !this.isCssSubmenuOpen; // Переключаем состояние
}



 @ViewChild('submenuImg', { static: false }) submenuImg!: ElementRef<HTMLElement>;
isImgSubmenuOpen = false;

toggleImgSubmenu() {
  this.submenuImg.nativeElement.classList.toggle('sidebar__submenu--open');
  this.isImgSubmenuOpen = !this.isImgSubmenuOpen;
}

  

}
