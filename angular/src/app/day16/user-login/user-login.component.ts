import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { CommonModule } from '@angular/common';

import { jwtDecode } from 'jwt-decode';

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
    private authService: AuthService
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

          localStorage.setItem(
            'accessToken',
            response.accessToken
          );

          localStorage.setItem(
            'refreshToken',
            response.refreshToken
          );

          const decodedToken: any =
            jwtDecode(response.accessToken);

          this.loggedInUserId =
            decodedToken.nameid;

          this.loggedInRole =
            decodedToken.role;

          this.successMessage =
            'Login successful';

          console.log(decodedToken);

        },

        error: (error) => {

          console.error(error);

          this.errorMessage =
            'Invalid credentials';

        }

      });

  }

}