import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-page-layout',
  imports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MainComponent
  ],


  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.scss'
})

export class PageLayoutComponent {

}
