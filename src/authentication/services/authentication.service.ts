import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://173.249.40.235:5005/api/User';
  private tokenKey = 'token';
  private refreshTokenKey = 'refreshToken';

  constructor(private http: HttpClient) {}

  register(user: any, isAdmin: boolean): Observable<any> {
    const endpoint = isAdmin ? 'CreateAdminUser()' : 'SignUp()';
    return this.http.post(`${this.apiUrl}/${endpoint}`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Login()`, credentials);
  }

  setTokens(tokens: { accessToken: string, refreshToken: string }): void {
    localStorage.setItem(this.tokenKey, tokens.accessToken);
    localStorage.setItem(this.refreshTokenKey, tokens.refreshToken);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshTokenKey);
  }

  clearTokens(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.refreshTokenKey);
  }

  isAdmin(): boolean {
    const token = this.getToken();
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      return decodedToken.realm_access.roles.includes('Admin');
    }
    return false;
  }

  hasAccess(): boolean {
    return !!this.getToken();
  }
}
