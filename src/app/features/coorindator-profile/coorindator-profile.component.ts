import { Component } from '@angular/core';
import { CoordinatorStatisticsComponent } from './components/coordinator-statistics/coordinator-statistics.component';
import { LoginHistoryComponent } from './components/login-history/login-history.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { RecentPatientsComponent } from './components/recent-patients/recent-patients.component';

@Component({
  selector: 'app-coorindator-profile',
  imports: [
    CoordinatorStatisticsComponent,
    MessagesComponent,
    LoginHistoryComponent,
    ProfileCardComponent,
    RecentPatientsComponent,
  ],
  templateUrl: './coorindator-profile.component.html',
  styleUrl: './coorindator-profile.component.css',
})
export class CoorindatorProfileComponent {}
