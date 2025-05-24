import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-banner',
  imports: [RouterLink],
  templateUrl: './service-banner.component.html',
  styleUrl: './service-banner.component.scss'
})
export class ServiceBannerComponent {



  toggleLight() {
    const bulb = document.querySelector('.banner__light-bulb-icon') as HTMLElement;
    const switcherOn = document.querySelector('.switcher-on') as HTMLElement;
    const switcherOff = document.querySelector('.switcher-off') as HTMLElement;
  
    if (!bulb || !switcherOn || !switcherOff) return;
  
    const isOn = bulb.classList.contains('light-bulb__active');
  
    if (isOn) {
      bulb.classList.remove('light-bulb__active');
      switcherOn.classList.remove('switcher-icon__hidden');
      switcherOff.classList.add('switcher-icon__hidden');
    } else {
      bulb.classList.add('light-bulb__active');
      switcherOn.classList.add('switcher-icon__hidden');
      switcherOff.classList.remove('switcher-icon__hidden');
    }
  }
}
