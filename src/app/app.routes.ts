import { Routes } from '@angular/router';
import { Home } from './home/home';
import {SignIn} from './sign-in/sign-in'

export const routes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home }, 
  { path: '', component: SignIn}];
  // ]
