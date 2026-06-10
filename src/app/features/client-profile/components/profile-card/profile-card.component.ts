import { Component } from '@angular/core';
import { LucideAngularModule, Phone, MapPin, User, IdCard } from 'lucide-angular';

@Component({
  selector: 'app-profile-card',
  imports: [LucideAngularModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css',
})
export class ProfileCardComponent {
  readonly Phone = Phone;
  readonly MapPin = MapPin;
  readonly User = User;
  readonly IdCard = IdCard;
}
