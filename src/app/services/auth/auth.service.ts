import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogin } from '../../components/unauthorized/interfaces/login.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(user: ILogin): Observable<{access_token: string}> {
    return this.http.post<{access_token: string}>('/api/auth/login', user);
  }
}
