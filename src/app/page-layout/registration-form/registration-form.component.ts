import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  imports: [],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.scss'
})


export class RegistrationFormComponent {
  closeModal() {
    const modal = document.querySelector('.modal-overlay') as HTMLElement;
    if (modal) {
      modal.style.display = 'none';
    }
  }
}
