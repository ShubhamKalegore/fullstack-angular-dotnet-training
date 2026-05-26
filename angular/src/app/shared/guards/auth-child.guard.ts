import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';

import { AuthService } from '../services/auth.service';

export const authChildGuard: CanActivateChildFn = () => {

  const authService = inject(AuthService);

  if (authService.protectRoutes) {

    alert('canActivate route guard activated, child sroutes cannot be visited');

    return false;

  }

  return true;

};