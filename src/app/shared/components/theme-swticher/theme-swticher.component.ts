import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, Sun, Moon } from 'lucide-angular';

@Component({
  selector: 'app-theme-swticher',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './theme-swticher.component.html',
  styleUrl: './theme-swticher.component.css',
})
export class ThemeSwticherComponent {
  theme: 'light' | 'dark' = 'light';
  readonly Moon = Moon;
  readonly Sun = Sun;

  ngOnInit() {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;

    if (saved) {
      this.theme = saved;
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.theme = prefersDark ? 'dark' : 'light';
    }
  }
  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');

    const next = current === 'dark' ? 'light' : 'dark';

    this.theme = next;
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }
}
