import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ILogin } from './login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  serverUrl = 'https://reqres.in/api/';
  errorData: {};

  constructor(private http: HttpClient) { }
  //this.serverUrl = 'http://localhost/dev/blogger/';

  login(username: string, password: string) {
      return this.http.post<any>(`${this.serverUrl}login`, { username: username, password: password })
          .pipe(map(user => {
              // login successful if there's a jwt token in the response
              if (user && user.token) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('token', user.token);
                  localStorage.setItem('isLoggedIn', "true");
                  localStorage.setItem('currentUser', JSON.stringify(user));
              }
              return user;
          }));
  }

  logout(): void {
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('currentUser');
  } 
  
}
