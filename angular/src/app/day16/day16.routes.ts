import { Routes } from '@angular/router';

import { Day16MainComponent }
from './day16-main/day16-main.component';

import { UserRegistrationComponent }
from './user-registration/user-registration.component';

import { UserLoginComponent }
from './user-login/user-login.component';

import { UsersListComponent }
from './users-list/users-list.component';

import { authGuard }
from '../shared/guards/auth.guard';

export const DAY16_ROUTES: Routes = [

  {
    path: '',
    component: Day16MainComponent,

    children: [

      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },

      {
        path: 'register',
        component: UserRegistrationComponent
      },

      {
        path: 'login',
        component: UserLoginComponent
      },

      {
        path: 'users',
        component: UsersListComponent,
        canActivate: [authGuard]
      }

    ]
  }

];