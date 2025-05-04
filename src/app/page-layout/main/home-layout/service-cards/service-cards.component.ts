import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-service-cards',
  imports: [
    RouterOutlet, 
    RouterLink

  ],
  
  templateUrl: './service-cards.component.html',
  styleUrl: './service-cards.component.scss'
})
export class ServiceCardsComponent {

}
