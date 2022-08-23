import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) { }

  loggedIn = false;

  register(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/users', user);
  }

  login(user: User): boolean {
    if (user.name == 'zehra' && user.password == '12345') {
      this.loggedIn = true;
      localStorage.setItem('isLogged', user.name);
      console.log(2);

      return true;
    }
    return false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  ReadLocalStorage() {
    return localStorage.getItem('isLogged');
  }

  logOut() {
    localStorage.removeItem('isLogged');
    this.loggedIn = false;
  }

}
