import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { loginData } from '../models/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly loginAPI = 'http://localhost:3333/api/login';

  constructor(private http: HttpClient) {}

  login(loginData: loginData): Observable<{ error: string; token: string }> {
    return this.http.post<{ error: string; token: string }>(this.loginAPI, {
      ...loginData,
    });
  }
}
