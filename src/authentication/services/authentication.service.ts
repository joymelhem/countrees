import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://173.249.40.235:5005/api/User';

  constructor(private http: HttpClient) {}

  register(user: any, isAdmin: boolean): Observable<any> {
    const endpoint = isAdmin ? 'CreateAdminUser()' : 'SignUp()';
    return this.http.post(`${this.apiUrl}/${endpoint}`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Login()`, credentials);
  }

  hasAccess(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
}
