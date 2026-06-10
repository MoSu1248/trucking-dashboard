import { Component } from '@angular/core';
import { MedicationComponent } from './components/medication/medication.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { ReferralsComponent } from './components/referrals/referrals.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { LucideAngularModule, Phone, MapPin, User, IdCard } from 'lucide-angular';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';

@Component({
  selector: 'app-client-profile',
  imports: [
    MedicationComponent,
    AppointmentsComponent,
    ReferralsComponent,
    PersonalDetailsComponent,

    ProfileCardComponent,
  ],
  templateUrl: './client-profile.component.html',
  styleUrl: './client-profile.component.css',
})
export class ClientProfileComponent {}
