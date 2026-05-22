import { Component } from '@angular/core';
import { LucideAngularModule, CircleAlert, Users, Clock } from 'lucide-angular';

@Component({
  selector: 'app-statistics',
  imports: [LucideAngularModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css',
})
export class StatisticsComponent {
  readonly CircleAlert = CircleAlert;
  readonly Users = Users;
  readonly Clock = Clock;
}
