import { Injectable } from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import {
  Observable,
  throwError
} from 'rxjs';

import {
  catchError
} from 'rxjs/operators';

import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl =
    'https://localhost:7213/api/auth';
    
  protectRoutes = false;

  constructor(
    private http: HttpClient
  ) {}

  // Register

  register(data: any): Observable<any> {

    return this.http
      .post(
        `${this.apiUrl}/register`,
        data
      )
      .pipe(

        catchError(error => {

          console.error(error);

          return throwError(() => error);

        })

      );

  }

  // Login

  login(data: any): Observable<any> {

    return this.http
      .post(
        `${this.apiUrl}/login`,
        data
      )
      .pipe(

        catchError(error => {

          console.error(error);

          return throwError(() => error);

        })

      );

  }

  // Logout

  logout() {

    localStorage.removeItem('accessToken');

    localStorage.removeItem('refreshToken');

  }

  // Access Token

  getAccessToken(): string | null {

    return localStorage.getItem(
      'accessToken'
    );

  }

  // Refresh Token

  getRefreshToken(): string | null {

    return localStorage.getItem(
      'refreshToken'
    );

  }

  // Get User Role

  getUserRole(): string | null {

    const token =
      this.getAccessToken();

    if (!token) {

      return null;

    }

    const decoded: any =
      jwtDecode(token);

    return decoded.role;

  }

  // Get User Id

  getUserId(): string | null {

    const token =
      this.getAccessToken();

    if (!token) {

      return null;

    }

    const decoded: any =
      jwtDecode(token);

    return decoded.nameid;

  }

  // Is Logged In

  isLoggedIn(): boolean {

    return !!this.getAccessToken();

  }

  // Token Expiry Check

  isTokenExpired(): boolean {

    const token =
      this.getAccessToken();

    if (!token) {

      return true;

    }

    const decoded: any =
      jwtDecode(token);

    const expiry =
      decoded.exp * 1000;

    return Date.now() > expiry;

  }

  // Refresh Token API

  refreshToken(): Observable<any> {

    return this.http
      .post(
        `${this.apiUrl}/refresh-token`,
        {

          accessToken:
            this.getAccessToken(),

          refreshToken:
            this.getRefreshToken()

        }
      )
      .pipe(

        catchError(error => {

          console.error(error);

          return throwError(() => error);

        })

      );

  }

}