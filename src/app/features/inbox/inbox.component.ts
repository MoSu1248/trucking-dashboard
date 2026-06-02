import { Component } from '@angular/core';
import { LucideAngularModule, User } from 'lucide-angular';
import { SearchComponent } from '../../shared/components/search/search.component';
import { FilterComponent } from '../../shared/components/filter/filter.component';

@Component({
  selector: 'app-inbox',
  imports: [LucideAngularModule, SearchComponent, FilterComponent],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.css',
})
export class InboxComponent {
  readonly User = User;
}
