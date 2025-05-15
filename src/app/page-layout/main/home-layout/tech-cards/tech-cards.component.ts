import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-tech-cards',
  imports: [
    RouterOutlet, 
    RouterLink

  ],
  templateUrl: './tech-cards.component.html',
  styleUrl: './tech-cards.component.scss'
})
export class TechCardsComponent {

}
