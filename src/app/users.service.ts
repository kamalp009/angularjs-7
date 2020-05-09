import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  serverUrl = 'https://reqres.in/api/';

  constructor(private http: HttpClient) { }

  getById(id: number) {
      return this.http.get(`${this.serverUrl}users/` + id);
  }

}
