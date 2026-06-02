import { Component } from '@angular/core';
import { SearchComponent } from '../../shared/components/search/search.component';
import { FilterComponent } from '../../shared/components/filter/filter.component';
import { NursesTableComponent } from './components/nurses-table/nurses-table.component';

@Component({
  selector: 'app-nurses',
  imports: [NursesTableComponent, FilterComponent, SearchComponent],
  templateUrl: './nurses.component.html',
  styleUrl: './nurses.component.css',
})
export class NursesComponent {}
 