import { Component } from '@angular/core';
import { ClientsTableComponent } from './components/clients-table/clients-table.component';
import { SearchComponent } from '../../shared/components/search/search.component';
import { FilterComponent } from '../../shared/components/filter/filter.component';

@Component({
  selector: 'app-clients',
  imports: [ClientsTableComponent, FilterComponent, SearchComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css',
})
export class ClientsComponent {}
