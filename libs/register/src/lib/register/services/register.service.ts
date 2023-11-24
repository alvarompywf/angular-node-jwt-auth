import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterData } from '../models/register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private readonly loginAPI = 'http://localhost:3333/api/register';

  constructor(private http: HttpClient) {}

  register(registerData: RegisterData): Observable<{ token: string }> {
    console.log('loginData', registerData);
    return this.http.post<{ token: string }>(this.loginAPI, {
      ...registerData,
    });
  }
}
