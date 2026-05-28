import {
  HttpErrorResponse,
  HttpInterceptorFn
} from '@angular/common/http';

import { inject } from '@angular/core';

import { catchError, switchMap, throwError } from 'rxjs';

import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (request, next) => {

  const authService = inject(AuthService);

  const token = authService.getAccessToken();

  const authRequest = token
    ? request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    : request;

  return next(authRequest).pipe(

    catchError((error: HttpErrorResponse) => {

      const isAuthEndpoint =
        request.url.includes('/api/auth/');

      if (error.status !== 401 || isAuthEndpoint || !authService.getRefreshToken()) {

        return throwError(() => error);

      }

      return authService.refreshToken().pipe(

        switchMap((response: any) => {

          authService.saveTokens(response);

          const retryRequest = request.clone({
            setHeaders: {
              Authorization: `Bearer ${response.accessToken}`
            }
          });

          return next(retryRequest);

        }),

        catchError(refreshError => {

          authService.logout();

          return throwError(() => refreshError);

        })

      );

    })

  );

};
