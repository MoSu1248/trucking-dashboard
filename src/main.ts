import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/features/home/home.component';
import { LoginComponent } from './app/features/login/login.component';
import { EditDataComponent } from './app/features/edit-data/edit-data.component';
import { ViewDataComponent } from './app/features/view-data/view-data.component';
import { provideHttpClient } from '@angular/common/http';
import { InboxComponent } from './app/features/inbox/inbox.component';
import { NursesComponent } from './app/features/nurses/nurses.component';
import { ClientsComponent } from './app/features/clients/clients.component';

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'edit', component: EditDataComponent },
      { path: 'view', component: ViewDataComponent },
      { path: 'login', component: LoginComponent },
      { path: 'inbox', component: InboxComponent },
      { path: 'nurses', component: NursesComponent },
    ]),
    provideHttpClient(),
  ],
});
