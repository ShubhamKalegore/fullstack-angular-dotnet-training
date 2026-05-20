import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'https://json-placeholder.mock.beeceptor.com';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {

    return this.http.get(`${this.apiUrl}/posts`).pipe(

      catchError(error => {

        console.error('API Error:', error);

        return throwError(() => error);

      })

    );
  }
}