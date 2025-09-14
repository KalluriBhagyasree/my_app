import { Routes } from '@angular/router';
import { Home } from './home/home';
import {SignIn} from './sign-in/sign-in';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Reports } from './reports/reports';

export const routes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: Home }, 
  { path: 'signin', component: SignIn},
  { path: 'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'reports', component: Reports}
];
  // ]
