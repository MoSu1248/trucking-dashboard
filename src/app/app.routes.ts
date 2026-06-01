// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ClientsComponent } from './features/clients/clients.component';
import { NursesComponent } from './features/nurses/nurses.component';
import { InboxComponent } from './features/inbox/inbox.component';
import { LoginComponent } from './features/login/login.component';
import { EditDataComponent } from './features/edit-data/edit-data.component';
import { ViewDataComponent } from './features/view-data/view-data.component';

export const routes: Routes = [
  { path: '', title: 'Dashboard', component: HomeComponent },
  { path: 'clients', title: 'Clients', component: ClientsComponent },
  { path: 'nurses', title: 'Nurses', component: NursesComponent },
  { path: 'inbox', title: 'Inbox', component: InboxComponent },
  { path: 'login', title: 'Login', component: LoginComponent },
  { path: 'edit', title: 'Edit', component: EditDataComponent },
  { path: 'view', title: 'View', component: ViewDataComponent },
];
