import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Home } from '../home/home';

@Component({
  selector: 'app-sign-in',
  imports: [],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css'
})
export class SignIn {

  constructor (private router : Router)
  {

  }
  onsignin()
  {
    console.log("signin button clicked");
    this.router.navigateByUrl('/home');
  }
}
