import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';

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

  @Output() signupClicked = new EventEmitter<void>();

  successMessage = '';

  errorMessage = '';

  loggedInRole = '';

  loggedInUserId = '';
  form!: FormGroup;

  public showPassword = false;

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

          if (this.authService.isAdmin()) {

            this.router.navigate(['/day0']);

            return;

          }

          this.router.navigate(['/day16']);

        },

        error: (error) => {

          console.error(error);

          this.errorMessage =
            'Invalid credentials';

        }

      });

  }

  public togglePasswordVisibility() {

    this.showPassword = !this.showPassword;

  }

}
