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

  private apiBaseUrl =
    'https://localhost:7265/api';

  private authUrl =
    `${this.apiBaseUrl}/auth`;

  protectRoutes = false;

  constructor(
    private http: HttpClient
  ) { }

  // Register

  register(data: any): Observable<any> {

    return this.http
      .post(
        `${this.authUrl}/register`,
        data,
        {
          responseType: 'text'
        }
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
        `${this.authUrl}/login`,
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

  saveTokens(response: any) {

    localStorage.setItem(
      'accessToken',
      response.accessToken
    );

    localStorage.setItem(
      'refreshToken',
      response.refreshToken
    );

  }

  getUsers(): Observable<any> {

    return this.http
      .get(`${this.apiBaseUrl}/users`)
      .pipe(

        catchError(error => {

          console.error(error);

          return throwError(() => error);

        })

      );

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
      this.decodeToken(token);

    return decoded.role
      ?? decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
      ?? null;

  }

  // Get User Id

  getUserId(): string | null {

    const token =
      this.getAccessToken();

    if (!token) {

      return null;

    }

    const decoded: any =
      this.decodeToken(token);

    return decoded.nameid
      ?? decoded.sub
      ?? decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']
      ?? null;

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
      this.decodeToken(token);

    const expiry =
      decoded.exp * 1000;

    return Date.now() > expiry;

  }

  // Refresh Token API

  refreshToken(): Observable<any> {

    return this.http
      .post(
        `${this.authUrl}/refresh-token`,
        {

          userId:
            this.getUserId(),

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

  private decodeToken(token: string): any {

    try {

      return jwtDecode(token);

    } catch {

      return {};

    }

  }

}
