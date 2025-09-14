import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing-module';
import { RouterModule } from '@angular/router';
import { Home } from '../home/home';
import { HomeModule } from '../home/home-module';



@NgModule({
  declarations: [
  ],
  imports: [
    HomeModule,
    CommonModule,
    RouterModule,
    SignInRoutingModule
  ]
})
export class SignInModule { }
