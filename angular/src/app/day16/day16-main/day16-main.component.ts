import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  RouterLink,
  RouterLinkActive,
  Router,
  RouterOutlet
} from '@angular/router';

import { AuthService }
  from '../../shared/services/auth.service';
import { UserLoginComponent } from '../user-login/user-login.component';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';
import { UsersListComponent } from '../users-list/users-list.component';

@Component({
  selector: 'app-day16-main',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    UserLoginComponent,
    UserRegistrationComponent,
    UsersListComponent
  ],
  templateUrl: './day16-main.component.html',
  styleUrl: './day16-main.component.css'
})
export class Day16MainComponent {

  showRegistrationForm = false;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  showLogin() {
    this.showRegistrationForm = false;
  }

  showRegistration() {
    this.showRegistrationForm = true;
  }

  logout() {
    this.authService.logout();
    this.showLogin();
    this.router.navigate(['/day16']);
  }

}
