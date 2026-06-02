import { Component } from '@angular/core';
import { LucideAngularModule, Mail, Search } from 'lucide-angular';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  pageTitle = '';
  readonly Mail = Mail;
  readonly Search = Search;
  constructor(private title: Title) {}
  ngOnInit() {
    this.pageTitle = this.title.getTitle();
  }
}
