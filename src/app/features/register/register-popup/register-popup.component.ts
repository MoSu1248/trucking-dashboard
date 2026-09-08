import { Component, output } from '@angular/core';

@Component({
  selector: 'app-register-popup',
  imports: [],
  templateUrl: './register-popup.component.html',
  styleUrl: './register-popup.component.css',
})
export class RegisterPopupComponent {
  onCloseRequest = output<void>();
}
