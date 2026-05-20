import { Component } from '@angular/core';
import { LucideAngularModule, Mail, Search } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  readonly Mail = Mail;
  readonly Search = Search;
}
