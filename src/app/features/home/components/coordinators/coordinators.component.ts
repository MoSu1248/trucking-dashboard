import { Component } from '@angular/core';
import { LucideAngularModule, Ellipsis } from 'lucide-angular';

@Component({
  selector: 'app-coordinators',
  imports: [LucideAngularModule],
  templateUrl: './coordinators.component.html',
  styleUrl: './coordinators.component.css',
})
export class CoordinatorsComponent {
  readonly Ellipsis = Ellipsis;
}
