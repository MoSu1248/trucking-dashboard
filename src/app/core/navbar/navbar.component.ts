import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  LucideAngularModule,
  LayoutDashboard,
  Settings,
  Users,
  LogOut,
  Inbox,
  Stethoscope,
  Sun,
  Moon,
} from 'lucide-angular';
import { Links } from '../../shared/models/links.model';
import { TwLogoComponent } from '../../shared/icons/logo/tw-logo/tw-logo.component';
import { ThemeSwticherComponent } from '../../shared/components/theme-swticher/theme-swticher.component';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    LucideAngularModule,
    ThemeSwticherComponent,
    TwLogoComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  ICON_MAP = {
    LayoutDashboard: LayoutDashboard,
    Settings: Settings,
    Users: Users,
    Inbox: Inbox,
    Stethoscope: Stethoscope,
  };
  readonly LogOut = LogOut;
  readonly Sun = Sun;
  readonly iconMap = this.ICON_MAP;

  links: Links[] = [
    { name: 'dashboard', url: '/', icon: LayoutDashboard },
    { name: 'clients', url: '/clients', icon: Users },
    { name: 'coordinators', url: '/coordinators', icon: Stethoscope },
    { name: 'inbox', url: '/inbox', icon: Inbox },
  ];
}
