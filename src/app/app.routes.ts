import { Routes } from '@angular/router';
import { Home } from './home/home';
import {SignIn} from './sign-in/sign-in';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Reports } from './reports/reports';
import { MangerComponent } from './manger/manger.component';
import { OperatorComponent } from './operator/operator.component';
import { MachinesComponent } from './machines/machines.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DailypulseComponent } from './dailypulse/dailypulse.component';

export const routes: Routes = [
  // {
  //   path: 'pulse',
  //   loadComponent: () =>
  //     import('./dailypulse/dailypulse.component').then(m => m.DailypulseComponent)
  // },
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: Home }, 
  { path: 'signin', component: SignIn},
  { path: 'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'reports', component: Reports},
  {path: 'manager', component : MangerComponent},
  { path: 'operator', component: OperatorComponent},
  { path: 'machine', component: MachinesComponent },
  {path:"notif", component: NotificationsComponent},
  {path: "pulse", component: DailypulseComponent}
];
  // ]
