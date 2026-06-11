import { Component } from '@angular/core';
import { LucideAngularModule, Ellipsis } from 'lucide-angular';

@Component({
  selector: 'app-recent-patients',
  imports: [LucideAngularModule],
  templateUrl: './recent-patients.component.html',
  styleUrl: './recent-patients.component.css',
})
export class RecentPatientsComponent {
  readonly Ellipsis = Ellipsis;
}
