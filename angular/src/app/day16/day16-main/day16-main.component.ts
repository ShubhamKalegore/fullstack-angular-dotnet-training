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

@Component({
  selector: 'app-day16-main',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './day16-main.component.html',
  styleUrl: './day16-main.component.css'
})
export class Day16MainComponent {

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/day16/login']);
  }

}
