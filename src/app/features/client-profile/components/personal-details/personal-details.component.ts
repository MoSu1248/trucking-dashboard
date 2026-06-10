import { Component } from '@angular/core';
import { LucideAngularModule, FlagIcon, Check, XIcon, User, BadgeCheckIcon } from 'lucide-angular';

@Component({
  selector: 'app-personal-details',
  imports: [LucideAngularModule],
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.css',
})
export class PersonalDetailsComponent {
  readonly FlagIcon = FlagIcon;
  readonly Check = Check;
  readonly XIcon = XIcon;
  readonly User = User;
  readonly BadgeCheckIcon = BadgeCheckIcon;
}
