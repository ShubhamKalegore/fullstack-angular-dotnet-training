import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { AuthService }
  from '../../shared/services/auth.service';

interface UserResponse {
  id: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {

  users: UserResponse[] = [];

  errorMessage = '';

  isLoading = false;

  constructor(
    public authService: AuthService
  ) {}

  fetchUsers() {

    this.errorMessage = '';
    this.users = [];
    this.isLoading = true;

    this.authService
      .getUsers()
      .subscribe({

        next: (users: UserResponse[]) => {

          this.users = users;
          this.isLoading = false;

        },

        error: (error) => {

          this.isLoading = false;

          if (error.status === 403) {

            this.errorMessage =
              'Only Admin users can view the users list.';

            return;

          }

          if (error.status === 401) {

            this.errorMessage =
              'Your login expired. Please login again.';

            return;

          }

          this.errorMessage =
            'Unable to load users.';

        }

      });

  }

  get role(): string | null {
    return this.authService.getUserRole();
  }

}
