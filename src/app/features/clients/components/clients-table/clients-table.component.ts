import { Component } from '@angular/core';
import { Ellipsis, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-clients-table',
  imports: [LucideAngularModule],
  templateUrl: './clients-table.component.html',
  styleUrl: './clients-table.component.css',
})
export class ClientsTableComponent {
  readonly Ellipsis = Ellipsis;
}
