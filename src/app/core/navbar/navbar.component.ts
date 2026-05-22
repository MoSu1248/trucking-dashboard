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
} from 'lucide-angular';
import { Links } from '../../shared/models/links.model';
import { TwLogoComponent } from '../../shared/icons/logo/tw-logo/tw-logo.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, LucideAngularModule, TwLogoComponent],
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
  readonly Settings = Settings;
  readonly iconMap = this.ICON_MAP;

  links: Links[] = [
    { name: 'dashboard', url: '/', icon: LayoutDashboard },
    { name: 'clients', url: '/clients', icon: Users },
    { name: 'nurses', url: '/nurses', icon: Stethoscope },
    { name: 'inbox', url: '/inbox', icon: Inbox },
  ];
}
