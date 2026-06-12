import { Component } from '@angular/core';
import { Ellipsis, LucideAngularModule } from 'lucide-angular';
@Component({
  selector: 'app-coordinators-table',
  imports: [LucideAngularModule],
  templateUrl: './coordinators-table.component.html',
  styleUrl: './coordinators-table.component.css',
})
export class CoordinatorsTableComponent {
  readonly Ellipsis = Ellipsis;
}
