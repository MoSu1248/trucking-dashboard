import { Component } from '@angular/core';
import { LucideAngularModule, Mail } from 'lucide-angular';

@Component({
  selector: 'app-messages',
  imports: [LucideAngularModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
})
export class MessagesComponent {
  readonly Mail = Mail;
}
