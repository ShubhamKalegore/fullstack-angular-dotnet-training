import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { CommonModule } from '@angular/common';

import { jwtDecode } from 'jwt-decode';

import { Router } from '@angular/router';

import { AuthService }
  from '../../shared/services/auth.service';

@Component({
  selector: 'app-user-login',
  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  successMessage = '';

  errorMessage = '';

  loggedInRole = '';

  loggedInUserId = '';
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.form = this.fb.group({

    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    password: [
      '',
      Validators.required
    ]

  });
  }

  

  login() {

    this.successMessage = '';
    this.errorMessage = '';

    this.authService
      .login(this.form.value)
      .subscribe({

        next: (response: any) => {

          this.authService.saveTokens(response);

          const decodedToken: any =
            jwtDecode(response.accessToken);

          this.loggedInUserId =
            this.authService.getUserId() ?? '';

          this.loggedInRole =
            this.authService.getUserRole() ?? '';

          this.successMessage =
            'Login successful';

          console.log(decodedToken);

          this.router.navigate(['/day16/users']);

        },

        error: (error) => {

          console.error(error);

          this.errorMessage =
            'Invalid credentials';

        }

      });

  }

}
