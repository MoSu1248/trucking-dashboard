import { Component } from '@angular/core';
import { MedicationComponent } from './components/medication/medication.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { ReferralsComponent } from './components/referrals/referrals.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { LucideAngularModule, Phone, MapPin, User, IdCard } from 'lucide-angular';
@Component({
  selector: 'app-client-profile',
  imports: [
    MedicationComponent,
    AppointmentsComponent,
    ReferralsComponent,
    PersonalDetailsComponent,
    LucideAngularModule,
  ],
  templateUrl: './client-profile.component.html',
  styleUrl: './client-profile.component.css',
})
export class ClientProfileComponent {
  readonly Phone = Phone;
  readonly MapPin = MapPin;
  readonly User = User;
  readonly IdCard = IdCard;
}
