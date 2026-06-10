import { Component } from '@angular/core';
import { LucideAngularModule, Check, XIcon } from 'lucide-angular';

@Component({
  selector: 'app-referrals',
  imports: [LucideAngularModule],
  templateUrl: './referrals.component.html',
  styleUrl: './referrals.component.css',
})
export class ReferralsComponent {
  readonly Check = Check;
  readonly XIcon = XIcon;
}
