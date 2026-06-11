import { Component } from '@angular/core';
import { LucideAngularModule, Phone, MapPin, IdCard, Mail } from 'lucide-angular';

@Component({
  selector: 'app-profile-card',
  imports: [LucideAngularModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css',
})
export class ProfileCardComponent {
  readonly Phone = Phone;
  readonly MapPin = MapPin;
  readonly Mail = Mail;
  readonly IdCard = IdCard;
}
