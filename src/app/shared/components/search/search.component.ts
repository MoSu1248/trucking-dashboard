import { Component } from '@angular/core';
import { LucideAngularModule, SearchIcon } from 'lucide-angular';

@Component({
  selector: 'app-search',
  imports: [LucideAngularModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  readonly SearchIcon = SearchIcon;
}
