import { Component } from '@angular/core';
import { SearchComponent } from '../../shared/components/search/search.component';
import { FilterComponent } from '../../shared/components/filter/filter.component';
import { CoordinatorsTableComponent } from './components/coordinators-table/coordinators-table.component';
CoordinatorsTableComponent

@Component({
  selector: 'app-coordinators',
  imports: [SearchComponent, FilterComponent, CoordinatorsTableComponent],
  templateUrl: './coordinators.component.html',
  styleUrl: './coordinators.component.css',
})
export class CoordinatorsComponent {}
