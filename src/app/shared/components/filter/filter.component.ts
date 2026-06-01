import { Component } from '@angular/core';
import { ListFilterIcon, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-filter',
  imports: [LucideAngularModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  readonly ListFilterIcon = ListFilterIcon;
}
