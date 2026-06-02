import { Component } from '@angular/core';
import { Ellipsis, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-nurses-table',
  imports: [LucideAngularModule],
  templateUrl: './nurses-table.component.html',
  styleUrl: './nurses-table.component.css',
})
export class NursesTableComponent {
  readonly Ellipsis = Ellipsis;
}
