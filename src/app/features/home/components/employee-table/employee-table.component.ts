import { Component } from '@angular/core';
import { Ellipsis, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-employee-table',
  imports: [LucideAngularModule],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css',
})
export class EmployeeTableComponent {
  readonly Ellipsis = Ellipsis;
}
