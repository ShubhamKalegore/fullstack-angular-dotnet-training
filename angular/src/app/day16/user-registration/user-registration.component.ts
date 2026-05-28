import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { CommonModule } from '@angular/common';

import { AuthService }
  from '../../shared/services/auth.service';

@Component({
  selector: 'app-user-registration',
  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  successMessage = '';

  errorMessage = '';

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
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ],

      confirmPassword: [
        '',
        Validators.required
      ],

      role: [
        'User',
        Validators.required
      ]

    });
  }



  register() {

    this.successMessage = '';
    this.errorMessage = '';

    const password =
      this.form.value.password;

    const confirmPassword =
      this.form.value.confirmPassword;

    if (password !== confirmPassword) {

      this.errorMessage =
        'Passwords do not match';

      return;

    }

    const request = {

      email: this.form.value.email,

      password: this.form.value.password,

      role: this.form.value.role

    };

    this.authService
      .register(request)
      .subscribe({

        next: () => {

          this.successMessage =
            'Registration successful';

          this.form.reset();

        },

        error: (error) => {

          console.error(error);

          this.errorMessage =
            'Registration failed';

        }

      });

  }

}