import { Component } from '@angular/core';
import { LucideAngularModule, Clock, CalendarClock, CalendarRangeIcon } from 'lucide-angular';

@Component({
  selector: 'app-coordinator-statistics',
  imports: [LucideAngularModule],
  templateUrl: './coordinator-statistics.component.html',
  styleUrl: './coordinator-statistics.component.css',
})
export class CoordinatorStatisticsComponent {
  readonly Clock = Clock;
  readonly CalendarClock = CalendarClock;
  readonly CalendarRangeIcon = CalendarRangeIcon;
}
