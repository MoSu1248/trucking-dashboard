import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ClientsComponent } from './features/clients/clients.component';
import { NursesComponent } from './features/nurses/nurses.component';
import { InboxComponent } from './features/inbox/inbox.component';
import { LoginComponent } from './features/login/login.component';
import { EditDataComponent } from './features/edit-data/edit-data.component';
import { ViewDataComponent } from './features/view-data/view-data.component';
import { RegisterComponent } from './features/register/register.component';
import { ClientProfileComponent } from './features/client-profile/client-profile.component';
import { CoorindatorProfileComponent } from './features/coorindator-profile/coorindator-profile.component';
import { DashboardLayoutComponent } from './core/layout/dashboard-layout/dashboard-layout.component';
import { AuthLayoutComponent } from './core/layout/auth-layout/auth-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: '', title: 'Dashboard', component: HomeComponent },
      { path: 'clients', title: 'Clients', component: ClientsComponent },
      { path: 'nurses', title: 'Nurses', component: NursesComponent },
      { path: 'inbox', title: 'Inbox', component: InboxComponent },
      { path: 'edit', title: 'Edit', component: EditDataComponent },
      { path: 'view', title: 'View', component: ViewDataComponent },
      { path: 'nurses/register', title: 'Register', component: RegisterComponent },
      { path: 'client/profile', title: 'Profile', component: ClientProfileComponent },
      {
        path: 'coordinator/profile',
        title: 'Coordinator Profile',
        component: CoorindatorProfileComponent,
      },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [{ path: 'login', title: 'Login', component: LoginComponent }],
  },
];
