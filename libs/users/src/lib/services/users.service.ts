import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly usersAPI = 'http://localhost:3333/api/users';

  constructor(private http: HttpClient) {}

  getUser(): Observable<user[]> {
    console.log(
      "localStorage.getItem('access_token')",
      localStorage.getItem('access_token')
    );
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('access_token')!,
      }),
    };

    return this.http.get<user[]>(this.usersAPI, httpOptions);
  }
}
