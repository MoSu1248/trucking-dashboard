import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/features/home/home.component';
import { LoginComponent } from './app/features/login/login.component';
import { EditDataComponent } from './app/features/edit-data/edit-data.component';
import { UsersComponent } from './app/features/users/users.component';
import { ViewDataComponent } from './app/features/view-data/view-data.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'edit', component: EditDataComponent },
      { path: 'users', component: UsersComponent },
      { path: 'view', component: ViewDataComponent },
    ]),
    provideHttpClient(),
  ],
});
